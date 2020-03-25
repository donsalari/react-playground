import React from 'react';

const Features = () => {
  const list = [
    'React 16',
    'React Router 5',
    'Hot Module Replacement',
    'CSS Autoprefixer',
    'CSS Modules with SourceMap',
    'Stage 1 Preset',
    'Webpack 4',
    'Code splitting by React Lazy'
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
