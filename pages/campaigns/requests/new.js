import React, { useState } from 'react';
import { Form, Button, Message, Input } from 'semantic-ui-react';
import web3 from '../../../ethereum/web3';
import getCampaign from '../../../ethereum/campaign';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';


export default function newRequest({ initialAddress }) {

    const [description, setDescription] = useState('');
    const [value, setValue] = useState()
    const [recipient, setRecipient] = useState()

    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const campaign = getCampaign(initialAddress);
        try {
            setIsLoading(true);
            const accounts = await web3.eth.getAccounts();
            await campaign.methods
                .createRequest(description, web3.utils.toWei(value, 'ether'), recipient)
                .send({ from: accounts[0], gas: '1000000' });
            Router.push(`/campaigns/${initialAddress}`)

        } catch (err) {
            setErrorMessage(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Layout>
            <h3>Create a Request</h3>
            <Form onSubmit={handleSubmit} error={errorMessage}>
                <Form.Field>
                    <label>Description</label>
                    <Input onChange={(evt) => setDescription(evt.target.value)}></Input>
                </Form.Field>
                <Form.Field>
                    <label>Value in ether</label>
                    <Input onChange={(evt) => setValue(evt.target.value)}></Input>
                </Form.Field>
                <Form.Field>
                    <label>Recipient</label>
                    <Input onChange={(evt) => setRecipient(evt.target.value)}></Input>
                </Form.Field>
                <Message error header="Oops!" content={errorMessage}></Message>
                <Button primary loading={isLoading}>Create!</Button>
            </Form>
        </Layout>
    )
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
