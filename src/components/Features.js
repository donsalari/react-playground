import React from 'react';

const Features = () => {
  const list = [
    'React 16',
    'React Router 5',
    'Semantic UI as the CSS Framework',
    'Hot Module Replacement',
    'CSS Autoprefixer',
    'CSS Modules with SourceMap',
    'Stage 1 Preset',
    'Webpack 4',
    'Code splitting by Route and Vendor'
  ];

  return (
    <>
      {list.map((item, idx) => (
        <div key={idx}>
          <span dangerouslySetInnerHTML={{ __html: item }} />
          <br />
        </div>
      ))}
    </>
  );
};

export default Features;
