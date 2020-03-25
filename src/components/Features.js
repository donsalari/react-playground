import React from 'react';

const Features = () => {
  const list = [
    'React 16',
    'React Router 5',
    'Webpack 4',
    'CSS Modules with SourceMap',
    'Code splitting with React Lazy Suspense'
  ];

  return (
    <>
      {list.map((item, idx) => (
        <div key={idx}>
          <span>{item}</span>
          <br />
        </div>
      ))}
    </>
  );
};

export default Features;
