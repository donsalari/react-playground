import React, { useState } from 'react';
import { usePaginatedQuery } from 'react-query'

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

  // `resolvedData` will either resolve to the latest page's data
  // or if fetching a new page, the last successful page's data
  // so you will not see a blank page between the pages
  const { status, resolvedData, error } = usePaginatedQuery(['github', page], fetchGithub);

  return (
    <Layout>
      <h2>API calls using React Query</h2>

      {status === 'loading' ? (
        <Loading />
      ) : status === 'error' ? (
        <div>Something went wrong: {error}</div>
      ) : (
        <>
          {resolvedData.length !== 0 && (
            <button onClick={loadMoreCommit}>Load More Commits</button>
          )}

          {resolvedData.map((c, index) => (
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
