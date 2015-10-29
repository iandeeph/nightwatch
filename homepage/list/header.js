var config = require('../../../config');
var url = config.urlGenerator(process.env.URL)('/');

exports.before = function (browser) {
  browser.maximizeWindow(); // TODO: find out how to do this globally
};

exports['homepage.list.header'] = function (browser) {
  browser
  .url(url)
  .waitForElementVisible('body', 1000)
  .assert.containsText(
    'h1',
    'Temukan Produk Keuangan Terbaik di Indonesia'
  );
};