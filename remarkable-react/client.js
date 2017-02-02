// const React = require('react');   // no longer required to require react since 'routes.jsx' is an element rather than a component
const ReactDOM = require('react-dom');
// const Component = require('./Component.jsx');   // rather than requiring Component, require the configured routes file
const routes = require('./routes/routes.jsx');
// const props = window.PROPS;   // not needed since it's no longer geing passed anywhere

ReactDOM.render(
  routes, document
);
