const router = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router');

router.get('*', function(req, res) {
  const props = { title: 'Universal React' };
  ReactRouter.match({
    routes: require('./routes.jsx'),
    location: req.url
  }, function(error, redirectLocation, renderProps) {
    if (renderProps) {
      let html = ReactDOMServer.renderToString(
        <ReactRouter.RouterContext {...renderProps}
          createElement={function(Component, renderProps) {
            return <Component {...renderProps} custom={props} />;
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
