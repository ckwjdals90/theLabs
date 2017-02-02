const React = require('react');   // had to make `React` available again because the JSX syntex transpiles down to `React.createElement()`
const ReactDOM = require('react-dom');
// const Component = require('./Component.jsx');   // rather than requiring Component, require the configured routes file
const routes = require('./routes/routes.jsx');
// const props = window.PROPS;   // not needed since it's no longer geing passed anywhere
const Redux = require('redux');
const Provider = require('react-redux').Provider;

function reducer(state) { return state; }

const store = Redux.createStore(reducer, window.PROPS);

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>, document
);
