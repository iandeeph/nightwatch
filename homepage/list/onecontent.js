var config = require('../../../config');
var url = config.urlGenerator(process.env.URL)('/kredit-pemilikan-rumah/t/rumah');

exports.before = function (browser) {
  browser.maximizeWindow(); // TODO: find out how to do this globally
};

exports['homepage.list.onecontent'] = function (browser) {
  browser
  .url(url)
  .waitForElementVisible('body', 1000)
  .assert.containsText(
    'h1.color-blue.no-margin',
    'Ajukan Kredit Pemilikan Rumah Terbaik di Indonesia!'
  );
};