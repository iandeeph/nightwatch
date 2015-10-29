var config = require('../../../config');
var url = config.urlGenerator(process.env.URL)('/kartu-kredit');

exports.before = function (browser) {
  browser.maximizeWindow(); // TODO: find out how to do this globally
};

exports['kartu-kredit.list.bandingkan'] = function (browser) {
	var bandingkanSelector1 = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(9) > div > div > div.col-xs-12.margin-top-10.margin-bottom-20 > div > div.col-md-3.text-center.margin-top-10.hidden-sm.hidden-xs > label';
	var bandingkanSelector2 = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(10) > div > div > div.col-xs-12.margin-top-10.margin-bottom-20 > div > div.col-md-3.text-center.margin-top-10.hidden-sm.hidden-xs > label';
	var bandingkanSelector3 = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(11) > div > div > div.col-xs-12.margin-top-10.margin-bottom-20 > div > div.col-md-3.text-center.margin-top-10.hidden-sm.hidden-xs > label';
	var bandingkanSelector4 = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(21) > div > div > div.col-xs-12.margin-top-10.margin-bottom-20 > div > div.col-md-3.text-center.margin-top-10.hidden-sm.hidden-xs > label';
	var bandingkanSelector5 = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(22) > div > div > div.col-xs-12.margin-top-10.margin-bottom-20 > div > div.col-md-3.text-center.margin-top-10.hidden-sm.hidden-xs > label';
	
	var labelSelector1 = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(9) > div > div > h4 > a';
	var labelSelector2 = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(10) > div > div > h4 > a';
	var labelSelector3 = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(11) > div > div > h4 > a';
	var labelSelector4 = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(21) > div > div > h4 > a';
	var labelSelector5 = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(22) > div > div > h4 > a';

	var label1 = 'Danamon Gold';
	var label2 = 'Carrefour Mega Card';
	var label3 = 'ANZ Travel Visa Platinum';
	var label4 = 'ANZ Travel Visa Signature';
	var label5 = 'ANZ Travel Visa Signature';

	var labelCompare1 = '#body > div.container > div > div > div > div > div:nth-child(1) > div:nth-child(2) > span';
	var labelCompare2 = '#body > div.container > div > div > div > div > div:nth-child(1) > div:nth-child(3) > span';
	var labelCompare3 = '#body > div.container > div > div > div > div > div:nth-child(1) > div:nth-child(4) > span';

	var btnThumb1 = '#compare-item-danamon-gold';
	var btnThumb2 = '#compare-item-carrefour-mega-card';
	var btnThumb3 = '#compare-item-anz-travel-visa-platinum';
	var btnThumb4 = '#compare-item-anz-travel-visa-signature';
	var btnThumb5 = '#compare-item-permatareward-card-visa-gold';

	var btnMoreCards = '#load-more-credit-cards';
	var btnCompare = '#body > div.compare-container > a.confirm-compare.btn.btn-action.btn-full.text-center > span';

  browser
  .url(url)
  .waitForElementVisible(bandingkanSelector1, 10000)
  .waitForElementVisible(bandingkanSelector2, 3000)
  .waitForElementVisible(bandingkanSelector3, 3000)

  .click(bandingkanSelector1)
  .waitForElementVisible(btnThumb1, 1000)

  .click(bandingkanSelector2)
  .waitForElementVisible(btnThumb2, 1000)

  .click(bandingkanSelector3)
  .waitForElementVisible(btnThumb3, 1000)
  .click(btnMoreCards)
  .waitForElementVisible(bandingkanSelector4, 1000)

  .click(btnThumb3)
  .click(bandingkanSelector4)

  .waitForElementVisible(btnMoreCards, 1000)
  .click(btnMoreCards)

  .waitForElementVisible(bandingkanSelector5, 1000)

  .click(btnThumb4)
  .click(bandingkanSelector5)

  .click(btnCompare)

  .verify.containsText(labelCompare1, label1)
  .verify.containsText(labelCompare1, label2)
  .verify.containsText(labelCompare1, label5);
};