import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorPage from './routing/ErrorPage';
import NotFoundPage from './routing/NotFoundPage';
import ErrorBoundary from './components/Base/ErrorBoundary';
import TaxCalculator from './routing/TaxCalculator';
import ConvertPage from './routing/ConvertPage';
import DemoPage from "./routing/DemoPage";
import HomePage from './routing/HomePage/HomePage';

/**
 * Main App routes.
 */
const routes = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/convert" component={ConvertPage} />
      <Route path="/error" component={ErrorPage} />
      <Route exact path="/demo" component={DemoPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);

const routing = function createRouting() {
  return (
    <Router>
      <ErrorBoundary>{routes()}</ErrorBoundary>
    </Router>
  );
};
/**
 * Wrap the app routes into router
 *
 * PROPS
 * =============================================================================
 * @returns {React.Node}
 */
export default routing;