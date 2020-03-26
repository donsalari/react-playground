import React, { useState } from 'react';
import { useQuery } from 'react-query'

import Layout from "../components/Layout";
import Loading from "../components/Loading";

const Github = () => {
  const [page, setPage] = useState(1);

  const fetchGithub = async () => {
    const response = await fetch(
      `https://api.github.com/search/commits?q=repo:facebook/react+css&page=${page}`,
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/vnd.github.cloak-preview",
        }),
      }
    );
    const data = await response.json();
    return data.items;
  };

  const loadMoreCommit = () => {
    setPage(page + 1);
  };

  const { status, data, error } = useQuery(['github', page], fetchGithub);

  return (
    <Layout>
      <h2>API calls using React Query</h2>

      {status === 'loading' ? (
        <Loading />
      ) : status === 'error' ? (
        <div>Something went wrong: {error}</div>
      ) : (
        <>
          {data.length !== 0 && (
            <button onClick={loadMoreCommit}>Load More Commits</button>
          )}

          {data.map((c, index) => (
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
        </>
      )}
    </Layout>
  );
};

export default Github;
