import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import web3 from '../../ethereum/web3';
import Layout from '../../components/Layout';
import getCampaign from '../../ethereum/campaign';
import { Button, Card, Grid } from 'semantic-ui-react';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

export default function Show({ initialAddress }) {
  const router = useRouter();
  const [campaignSummary, setCampaignSummary] = useState(null);
  const [campaignAddress, setCampaignAddress] = useState(initialAddress);

  useEffect(() => {
    const fetchCampaignSummary = async (address) => {
      try {
        const accounts = await web3.eth.getAccounts();
        const campaign = getCampaign(address);
        const summary = await campaign.methods.getSummary().call();
        const data = {
          minimumContribution: summary[0],
          balance: summary[1],
          requestsCount: summary[2],
          approversCount: summary[3],
          manager: summary[4],
        };
        console.log('Campaign Summary:', data);
        setCampaignSummary(data);
      } catch (error) {
        console.error('Error fetching campaign summary:', error);
      }
    };

    if (campaignAddress) {
      fetchCampaignSummary(campaignAddress);
    }
  }, [campaignAddress]);

  const renderCards = () => {
    if (!campaignSummary) return null;

    const {
      minimumContribution,
      balance,
      requestsCount,
      approversCount,
      manager,
    } = campaignSummary;
    const items = [
      {
        header: manager,
        meta: 'Address of Manager',
        description: 'The manager created this campaign and can create requests to withdraw money',
        style: { overflowWrap: 'break-word' },
      },
      {
        header: minimumContribution,
        meta: 'Minimum Contribution (wei)',
        description: 'Minimum contribution required to become an approver',
        style: { overflowWrap: 'break-word' },
      },
      {
        header: requestsCount,
        meta: 'Number of Requests',
        description: 'A request tries to withdraw money from the contract and must be approved by approvers',
        style: { overflowWrap: 'break-word' },
      },
      {
        header: approversCount,
        meta: 'Number of Approvers',
        description: 'Number of people who have contributed to the campaign',
        style: { overflowWrap: 'break-word' },
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'Campaign Balance (ether)',
        description: 'Balance money the campaign has left to spend',
        style: { overflowWrap: 'break-word' },
      },
    ];

    return <Card.Group items={items} />;
  };

  return (
    <Layout>
      <h3>Show Campaign</h3>
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            {campaignSummary ? renderCards() : 'Loading...'}
            <Grid.Row>
              <Grid.Column>
                <Link route={`/campaigns/${campaignAddress}/requests`}>
                  <a><Button primary>View Requests</Button></a>
                </Link>
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={6}>
            <ContributeForm address={campaignAddress} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
}

// Fetch the query parameters on the server side
export async function getServerSideProps(context) {
  const { address } = context.query;
  return {
    props: {
      initialAddress: address || null,
    },
  };
}
