import React from 'react';
import { Helmet } from 'react-helmet';
import { Heading, Text } from 'rebass';
import Container from '../components/Container';
import Layout from '../components/Layout';

export default function NotFoundPage() {
  return (
    <Layout>
      <Helmet>
        <title>Page not found</title>
      </Helmet>

      <Container>
        <Heading>Page not found</Heading>
        <Text as="p">The requested page is unavailable.</Text>
      </Container>
    </Layout>
  );
}
