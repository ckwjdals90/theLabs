const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const browserHistory = ReactRouter.browserHistory;

// need to use Router's 'createElement' prop, which allows us to control the creation of the Router element.
// Since this file is also used on the sever-side, we'll need to add some logic to ensure that `createElement` only works on the client-side.
// a quick and easy way is to confirm that `window` is a global and an object
// if (typeof window === 'object') {
//   function createElement(Component, props) {
//     return <Component {...props} custom={window.PROPS} />;
//   }
// }   // since we are now using `Redux` and the Provider, createElement is no longer needed

module.exports = (
  <Router history={browserHistory}>
    <Route path='/' component={require('../views/Layout.jsx')}>
      <IndexRoute component={require('../views/Index.jsx')} />
      <Route path='about' component={require('../views/About.jsx')} />
    </Route>
  </Router>
)
