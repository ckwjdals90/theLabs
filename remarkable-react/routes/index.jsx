const router = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router');

router.get('*', (req, res) => {
  const props = { title: 'Universal React' };
  ReactRouter.match({
    routes: (
      <ReactRouter.Router history={ReactRouter.browserHistory}>
        <ReactRouter.Route path='/' component={require('../Component')}>
        </ReactRouter.Route>
      </ReactRouter.Router>
    ),
    location: req.url
  }, (error, redirectLocation, renderProps) => {
    if (renderProps) {
      let html = ReactDOMServer.renderToString(
        <ReactRouter.RouterContext {...renderProps}
          createElement={(Component, renderPorps) => {
            return <Component {...renderProps} {...props} />;
          }}
        />
      );
      res.send(html);
    } else {
      res.status(404).send('Not Found');
    }
  });
});

module.exports = router;
