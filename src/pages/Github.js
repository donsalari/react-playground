import React, { useEffect, useState } from "react";

import Layout from "../components/Layout";
import Loading from "../components/Loading";

const Features = () => {
  const [page, setPage] = useState(1);
  const [commitHistory, setCommitHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadMoreCommit = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    fetch(
      `https://api.github.com/search/commits?q=repo:facebook/react+css&page=${page}`,
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/vnd.github.cloak-preview",
        }),
      }
    )
      .then((res) => res.json())
      .then((response) => {
        setCommitHistory(response.items);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [page]);

  return (
    <Layout>
      <h2> API calls with React Hooks </h2>
      {isLoading && <Loading />}

      {commitHistory.length !== 0 && (
        <button onClick={loadMoreCommit}>Load More Commits</button>
      )}

      {commitHistory.map((c, index) => (
        <div key={index}>
          {c.commit && (
            <>
              <div>
                <h3>{c.commit.committer.name}</h3>
                <p>{c.commit.message}</p>
              </div>
              <hr />
            </>
          )}
        </div>
      ))}
    </Layout>
  );
};

export default Features;
