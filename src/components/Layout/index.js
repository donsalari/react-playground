import React from "react";
import { Link } from "react-router-dom";

import { container, floatRight, header } from "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className={container}>
      <Link to="/">
        <h1 className={header}>React playground</h1>
      </Link>
      <hr />
      {children}
      <hr />
      <p className={floatRight}>Footer</p>
    </div>
  );
};

export default Layout;
