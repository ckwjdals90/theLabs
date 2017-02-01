require('babel-register')({
  presets: ['react']
});

const express = require('express');
const app = express();
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const Component = require('./Component.jsx');

app.get('/', (req, res) => {
  let html = ReactDOMServer.renderToString(
    React.createElement(Component)
  );
  res.send(html);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log('listening on http://localhost:' + PORT);
});
