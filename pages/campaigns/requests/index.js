import React from 'react'
import Layout from '../../../components/Layout';
import { Link } from '../../../routes';
import { Button, Header, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from 'semantic-ui-react';
import getCampaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';

export default function requestIndex({ initialAddress, requests, requestCount, approversCount }) {
    const handleApprove = async (idx) => {
        const account = (await web3.eth.getAccounts())[0]
        const campaign = getCampaign(initialAddress);
        await campaign.methods.approveRequest(idx).send({ from: account, gas: '1000000' });
    }

    const handleFinalize = async (idx) => {
        const account = (await web3.eth.getAccounts())[0]
        const campaign = getCampaign(initialAddress);
        await campaign.methods.finalizeReuqest(idx).send({ from: account, gas: '1000000' });
    }

    return (
        <Layout>
            <h3>
                Requests
            </h3>
            <Link route={`/campaigns/${initialAddress}/requests/new`}>
                <a>
                    <Button primary>Add Request</Button>
                </a>
            </Link>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>ID</TableHeaderCell>
                        <TableHeaderCell>Description</TableHeaderCell>
                        <TableHeaderCell>Amount</TableHeaderCell>
                        <TableHeaderCell>Recipient</TableHeaderCell>
                        <TableHeaderCell>Approvals Count</TableHeaderCell>
                        <TableHeaderCell>Approval</TableHeaderCell>
                        <TableHeaderCell>Finalize</TableHeaderCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {requests.map((request, idx) => (
                        <TableRow key={idx}>
                            <TableCell>{idx}</TableCell>
                            <TableCell>{request.description}</TableCell>
                            <TableCell>{web3.utils.fromWei(request.value, 'ether')}</TableCell>
                            <TableCell>{request.recipient}</TableCell>
                            <TableCell>{request.approvalsCount}/{approversCount}</TableCell>
                            <TableCell><Button color='green' basic onClick={() => handleApprove(idx)}>Approve</Button></TableCell>
                            <TableCell><Button color='green' basic onClick={() => handleFinalize(idx)}>Finalize</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </Layout>
    )
}

// Fetch the query parameters on the server side
export async function getServerSideProps(context) {
    const { address } = context.query;
    const campaign = getCampaign(address);
    const requestsCount = await campaign.methods.getRequestsCount().call();
    const requests = await Promise.all(Array(requestsCount).fill().map((e, i) => campaign.methods.requests(i).call()))
    const approversCount = await campaign.methods.approversCount().call()
    const serializedResult = requests.map(item => ({
        description: item.description,
        value: item.value.toString(), // Ensure value is a string
        recipient: item.recipient,
        completed: item.completed,
        approvalsCount: item.approvalsCount.toString(), // Ensure approvalsCount is a string
    }));
    return {
        props: {
            initialAddress: address || null,
            requests: serializedResult || null,
            requestsCount: requestsCount || 0,
            approversCount: approversCount || 0
        },
    };
}