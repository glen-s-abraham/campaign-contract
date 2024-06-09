import React from 'react'
import Header from './Header'
import { Container } from 'semantic-ui-react'
import Head from 'next/head'



export default function Layout({ children }) {
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
                />
            </Head>
            <Container>
                <Header />
                {children}
            </Container>
        </>

    )
}
