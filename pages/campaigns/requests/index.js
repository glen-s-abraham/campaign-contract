import React from 'react'
import Layout from '../../../components/Layout';
import { Link } from '../../../routes';
import { Button } from 'semantic-ui-react';

export default function requestIndex({ initialAddress }) {
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