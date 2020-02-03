// server.js
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const compression = require('compression');

const port = process.env.PORT || 8080;
const app = express();

function checkUrl(req, res, next) {
  const { host } = req.headers;
  if (host.match(/^www\..*/i)) {
    return res.redirect(301, `https://${host.replace('www.', '')}${req.url}`);
  }

  return next();
}

app.use(checkUrl);

app.use(
  compression({
    filter: () => true,
    threshold: 0,
  }),
);

app.use(favicon(`${__dirname}/build/favicon.ico`));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);
