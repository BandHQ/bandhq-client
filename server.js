// server.js
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const compression = require('compression');

const port = process.env.PORT || 8080;
const app = express();
app.use(favicon(`${__dirname}/build/favicon.ico`));

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.use(compression());

app.get('/ping', function(req, res) {
  return res.send('pong');
});

app.get('https://www.bandhq.app/*', (req, res) => {
  return res.status(301).redirect(`https://bandhq.app${req.path}`);
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);
