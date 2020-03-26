import React from "react";
import { Link } from "react-router-dom";

import Layout from "../components/Layout";
import Features from "../components/Features";

const Home = () => {
  return (
    <Layout>
      <Features />
      <Link to="/dynamic">Navigate to Lazy Page</Link>
      <br />
      <Link to="/github">API calls using React Query</Link>
    </Layout>
  );
};

export default Home;
