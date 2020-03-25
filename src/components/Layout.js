import React from 'react';
import { Link } from 'react-router-dom';

import { container, pullRight, h1 } from './layout.css';

const Layout = ({ children }) => {
  return (
    <div className={container}>
      <Link to="/">
        <h1 className={h1}>
          React playground
        </h1>
      </Link>
      <hr />
      {children}
      <hr />
      <p className={pullRight}>
        Footer
      </p>
    </div>
  );
};

export default Layout;
