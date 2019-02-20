import React from 'react';
import { Helmet } from 'react-helmet';
import Container from '../components/Container';
import Layout from '../components/Layout';

export default function NotFoundPage() {
  return (
    <Layout>
      <Helmet>
        <title>Page not found</title>
      </Helmet>

      <Container>
        <h1>Page not found</h1>
        <p>The requested page is unavailable.</p>
      </Container>
    </Layout>
  );
}
