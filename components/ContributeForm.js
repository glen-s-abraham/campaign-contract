import React, { useState } from 'react'
import { Button, Form, Input, Message } from 'semantic-ui-react'
import getCampaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

export default function ContributeForm({ address }) {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const campaign = getCampaign(address);
        try {
            setIsLoading(true);
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[2],
                value: web3.utils.toWei(value, 'ether')
            })
            Router.replaceRoute(`/campaigns/${address}`);
            setValue('')
        } catch (err) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <div>
            <h1>Contribute to this campaign!</h1>
            <Form onSubmit={handleSubmit} error={!!error}>
                <Form.Field>
                    <label>Amount to contribute</label>
                    <Input label="ether" labelPosition="right" onChange={(evt) => setValue(evt.target.value)}></Input>
                </Form.Field>
                <Message error header="Oops!" content={error} />
                <Button primary loading={isLoading}>
                    Contribute!
                </Button>
            </Form>
        </div>
    )
}
