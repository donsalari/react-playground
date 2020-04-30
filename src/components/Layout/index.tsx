import React from "react";
import { Link } from "react-router-dom";

import styles from "./layout.css";

interface LayoutProps {
  children: any;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <h1 className={styles.header}>React playground</h1>
      </Link>
      <hr />
      {children}
      <hr />
      <p className={styles.floatRight}>Footer</p>
    </div>
  );
};

export default Layout;
