const router = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router');
const Redux = require('redux');
const Provider = require('react-redux').Provider;

function reducer(state) { return state; }

router.get('*', function(req, res) {
  const initialState = { title: 'Universal React' };
  const store = Redux.createStore(reducer, initialState);

  ReactRouter.match({
    routes: require('./routes.jsx'),
    location: req.url
  }, function(error, redirectLocation, renderProps) {
    if (renderProps) {
      let html = ReactDOMServer.renderToString(
        <Provider store={store}>
          <ReactRouter.RouterContext {...renderProps} />
        </Provider>
      );
      res.send(html);
    } else {
      res.status(404).send('Not Found');
    }
  });
});

module.exports = router;
