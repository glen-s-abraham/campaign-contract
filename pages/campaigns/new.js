import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { Button, Form, Input, Message } from 'semantic-ui-react'
import web3 from '../../ethereum/web3';
import factory from '../../ethereum/factory';

export default function newCampaign() {

    const [minimumContribution, setminimumContribution] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        setIsLoading(true);
        try {
            const accounts = await web3.eth.getAccounts();
            await factory.methods
                .createCampaign(minimumContribution)
                .send({ from: accounts[0], gas: '1000000' });
        } catch (err) {
            setErrorMessage(err.message);
        } finally {
            setIsLoading(false)
        }

    };



    return (
        <Layout>
            <h1>New Campaign!</h1>
            <Form onSubmit={handleSubmit} error={errorMessage}>
                <Form.Field>
                    <label>Minimum Contribution</label>
                    <Input label="wei" value={minimumContribution} labelPosition='right' onChange={(evt) => setminimumContribution(evt.target.value)} />
                    <Message error header="Oops!" content={errorMessage}></Message>
                    <Button type='submit' primary loading={isLoading}>Create</Button>
                </Form.Field>
            </Form>
        </Layout>
    )
}
