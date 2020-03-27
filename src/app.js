import React, { Suspense } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import Loading from "./components/Loading";

const LazyPage = React.lazy(() =>
  import(/* webpackChunkName: "lazy-page" */ "./pages/Lazy")
);

const FourOhFour = React.lazy(() =>
  import(/* webpackChunkName: "four-oh-four" */ "./pages/FourOhFour")
);

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/dynamic" component={LazyPage} />
          <Route component={FourOhFour} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
