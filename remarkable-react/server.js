require('babel-register')({
  presets: ['react']
});

const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(require('./routes/index.jsx'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log('listening on http://localhost:' + PORT);
});
