require('babel-register');

const router = require('../app.js').default;
const Sitemap = require('../').default;

new Sitemap(router).build('https://bandhq.app').save('./sitemap.xml');
