import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Layout from '../components/Layout';



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
      description: <a>View Campaign</a>,
      fluid: true
    }));

    return <Card.Group items={items}></Card.Group>;
  };

  return (
    <Layout>
      <div>
        <Head>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          />
        </Head>
        <h3>Open Campaigns</h3>
        <Button
          floated='right'
          content="Create Campaign"
          icon="add circle"
          primary
        />
        {campaigns.length > 0 ? renderCampaigns() : null}
      </div>
    </Layout >
  );
}
