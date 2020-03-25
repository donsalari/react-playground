import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import Features from './Features';

const Home = () => {
  return (
    <Layout>
      <Features />
      <Link to="/dynamic">Navigate to Dynamic Page</Link>
    </Layout>
  );
};

export default Home;
