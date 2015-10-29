var config = require('../../../config');
var url = config.urlGenerator(process.env.URL)('/kartu-kredit');

exports.before = function (browser) {
  browser.maximizeWindow(); // TODO: find out how to do this globally
};

exports['kartu-kredit.list.header'] = function (browser) {
	var selectorLabelHeaderKreditCard = "#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.listing-header > div > div.col-xs-12.col-md-8 > span";
  browser
  .url(url)
  .waitForElementVisible('body', 1000)
  .assert.containsText(
    selectorLabelHeaderKreditCard,
    'Menunjukan 247 kartu yang memenuhi kriteria'
  );
};