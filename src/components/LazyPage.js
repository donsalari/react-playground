import React from 'react';

import Layout from './Layout';

const LazyPage = () => {
  return (
    <Layout>
      <h2>Lazy Page</h2>
      <p>This page was lazy loaded</p>
    </Layout>
  );
};

export default LazyPage;
