import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="pl4 pr4">
      <Link to="/">
        <h1 className="mt3 mb3">React playground</h1>
      </Link>
      <hr />
      {children}
      <hr />
      <p className="flex justify-end">Footer</p>
    </div>
  );
};

export default Layout;
