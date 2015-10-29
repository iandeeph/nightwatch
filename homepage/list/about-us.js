var config = require('../../../config');
var url = config.urlGenerator(process.env.URL)('/about-us');

exports.before = function (browser) {
  browser.maximizeWindow(); // TODO: find out how to do this globally
};

exports['homepage.list.about-us'] = function (browser) {
  browser
  .url(url)
  .waitForElementVisible('body', 1000)
  .assert.containsText(
    '.col-xs-12.no-override',
    'Diluncurkan pada april 2015, Cermati adalah perusahaan startup yang bergerak di bidang teknologi keuangan.'
  );
};