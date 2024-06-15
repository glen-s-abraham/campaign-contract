import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import web3 from '../../ethereum/web3';
import Layout from '../../components/Layout';
import getCampaign from '../../ethereum/campaign';
import { Card } from 'semantic-ui-react';

export default function Show() {

  const router = useRouter();
  const { address } = router.query;
  const [campaignSummary, setCampaignSummary] = useState()

  useEffect(() => {
    const fetchCampaignSummary = async () => {
      if (address) {
        const accounts = await web3.eth.getAccounts();
        const campaign = getCampaign(address);
        const summary = await campaign.methods.getSummary().call();
        const data = {
          minimumContribution: summary[0],
          balance: summary[1],
          requestsCount: summary[2],
          approversCount: summary[3],
          manager: summary[4],
        }
        console.log(data)
        setCampaignSummary(data)
      }

    };


    fetchCampaignSummary();

  }, []);

  const renderCards = () => {
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
        description: 'The manager created this campaign and create requests to withdraw money',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: minimumContribution,
        meta: 'Minimum Contribution (wei)',
        description: 'Minimum Contribution required to become the approver',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: requestsCount,
        meta: 'Number of Requests',
        description: 'A Request Tries to withdraw moeny from the contract and must be approved by approvers',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: approversCount,
        meta: 'Number of approvers',
        description: 'Number of people who has contrinuted to the campaign',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'Campaign Balance (ether)',
        description: 'Balance money the campaign has left to spend',
        style: { overflowWrap: 'break-word' }
      }

    ];


    return <Card.Group items={items} />

  }

  return (
    <Layout>
      <h3>Show Campaign</h3>
      {campaignSummary ? renderCards() : ''}
    </Layout>
  );
}
