import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Layout from '../components/Layout';
import { Link } from '../routes';




export default function Show() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchDeployedCampaigns = async () => {
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
      const deployedCampaigns = await factory.methods.getDeployedCampaigns().call();
      console.log(deployedCampaigns);
      setCampaigns(deployedCampaigns);
    };

    fetchDeployedCampaigns();
  }, []);

  const renderCampaigns = () => {
    const items = campaigns.map(campaign => ({
      header: campaign,
      description: (<Link route={`/campaigns/${campaign}`}><a>View Campaign</a></Link>),
      fluid: true
    }));

    return <Card.Group items={items}></Card.Group>;
  };

  return (
    <Layout>
      <div>
        <h3>Open Campaigns</h3>
        <Link route="/campaigns/new">
          <Button
            floated='right'
            content="Create Campaign"
            icon="add circle"
            primary
          />
        </Link>

        {campaigns.length > 0 ? renderCampaigns() : null}
      </div>
    </Layout >
  );
}
