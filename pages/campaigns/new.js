import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { Button, Form, Input } from 'semantic-ui-react'
import web3 from '../../ethereum/web3';
import factory from '../../ethereum/factory';

export default function newCampaign() {

    const [minimumContribution, setminimumContribution] = useState(0);

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(minimumContribution);
        const accounts = await web3.eth.getAccounts();
        await factory.methods
            .createCampaign(minimumContribution)
            .send({ from: accounts[0], gas: '1000000' });
    };



    return (
        <Layout>
            <h1>New Campaign!</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Minimum Contribution</label>
                    <Input label="wei" value={minimumContribution} labelPosition='right' onChange={(evt) => setminimumContribution(evt.target.value)} />
                    <Button type='submit' primary>Create</Button>
                </Form.Field>
            </Form>
        </Layout>
    )
}
