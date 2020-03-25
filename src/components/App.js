import React, { Suspense } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Loading from './Loading';

const DynamicPage = React.lazy(() =>
  import(/* webpackChunkName: "dynamic-page" */ "./DynamicPage")
);

const FourOhFour = React.lazy(() =>
  import(/* webpackChunkName: "no-match" */ "./FourOhFour")
);

const App = () => {
  return (
    <Router>
      <Suspense fallback={Loading}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dynamic" component={DynamicPage} />
          <Route component={FourOhFour} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
