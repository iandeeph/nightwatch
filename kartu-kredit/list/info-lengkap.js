var config = require('../../../config');
var url = config.urlGenerator(process.env.URL)('/kartu-kredit');

exports.before = function (browser) {
  browser.maximizeWindow(); // TODO: find out how to do this globally
};

exports['kartu-kredit.list.info-lengkap'] = function (browser) {
	var btnInfoLengkap1 = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(2) > div > div > div.col-xs-12.margin-top-10.margin-bottom-20 > div > div.col-md-9.text-right.sm-text-center.nopadding > div > a:nth-child(2)';
	var btnInfoLengkap2 = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(3) > div > div > div.col-xs-12.margin-top-10.margin-bottom-20 > div > div.col-md-9.text-right.sm-text-center.nopadding > div > a:nth-child(2)';

	var labelSelector1 = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(2) > div > div > h4 > a';
	var labelSelector2 = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(3) > div > div > h4 > a';

	var imageSelector = '#body > div.container-fluid.nopadding > div.container.nopadding.portfolio-item.margin-bottom-20.margin-top-20 > div > div.col-lg-4.col-md-5.col-sm-12 > div > img';
	var nameLabelSelector = '#body > div.container-fluid.nopadding > div.container.nopadding.portfolio-item.margin-bottom-20.margin-top-20 > div > div.col-lg-8.col-md-7.col-sm-12 > div.row.detail-box.margin-bottom-10 > h2';
	var descriptionSelector = '#body > div.container-fluid.nopadding > div.container.nopadding.portfolio-item.margin-bottom-20.margin-top-20 > div > div.col-lg-8.col-md-7.col-sm-12 > div.row.detail-box.margin-bottom-10 > p';
	var btnSaveSelector = '#save-creditCard > div:nth-child(1) > button';
	var promoLabelSelector = '#body > div.container-fluid.nopadding > div:nth-child(5) > h3';
	var featureTitleSelector = '#body > div.container-fluid.nopadding > div:nth-child(3) > div > h3:nth-child(1)';
	var featureSelector1 = '#body > div.container-fluid.nopadding > div:nth-child(3) > div > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(2) > p';
	var featureSelector2 = '#body > div.container-fluid.nopadding > div:nth-child(3) > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(2) > p';
	var featureSelector3 = '#body > div.container-fluid.nopadding > div:nth-child(3) > div > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(2) > p';
	var reqSelector = '#body > div.container-fluid.nopadding > div:nth-child(3) > div > h3:nth-child(5)';
	var reqBodySelector ='#body > div.container-fluid.nopadding > div:nth-child(3) > div > div:nth-child(6) > div > div:nth-child(1) > div.td';
	var reviewSelector = '#body > div.container-fluid.nopadding > div:nth-child(3) > div > h3:nth-child(7)';
	var reviewBodySelector = '#body > div.container-fluid.nopadding > div:nth-child(3) > div > div:nth-child(8) > p:nth-child(2)';
	var howToApplySelector = '#body > div.container-fluid.nopadding > div:nth-child(3) > div > h3:nth-child(9)';
	var howToApplyBodySelector = '#body > div.container-fluid.nopadding > div:nth-child(3) > div > div:nth-child(10) > p';
	var commentSectionSelector = '#body > div.container-fluid.nopadding > div:nth-child(6) > div';
	var sameCardSelector = '#body > div.container-fluid.nopadding > div:nth-child(5) > div:nth-child(5) > h3';

  browser
  .url(url)
  .waitForElementVisible('body', 1000)

  .waitForElementVisible(btnInfoLengkap1, 1000)
  .click(btnInfoLengkap1)

  .verify.elementPresent(imageSelector)
  .verify.visible(nameLabelSelector)
  .getText(nameLabelSelector)

  .verify.visible(descriptionSelector)
  .getText(descriptionSelector)

  .verify.elementPresent(btnSaveSelector)
  .verify.visible(promoLabelSelector)
  .getText(promoLabelSelector)

  .verify.visible(featureTitleSelector)
  .getText(featureTitleSelector)

  .verify.visible(featureSelector1)
  .getText(featureSelector1)

  .verify.visible(featureSelector2)
  .getText(featureSelector2)

  .verify.visible(featureSelector3)
  .getText(featureSelector3)

  .verify.visible(reqSelector)
  .getText(reqSelector)

  .verify.visible(reqBodySelector)
  .getText(reqBodySelector)

  .verify.visible(reviewSelector)
  .getText(reviewSelector)

  .verify.visible(reviewBodySelector)
  .getText(reviewBodySelector)

  .verify.visible(howToApplySelector)
  .getText(howToApplySelector)

  .verify.visible(howToApplyBodySelector)
  .getText(howToApplyBodySelector)

  .verify.visible(commentSectionSelector)
  .verify.visible(sameCardSelector)


  .url(url)
  .waitForElementVisible('body', 1000)

  .waitForElementVisible(btnInfoLengkap2, 1000)
  .click(btnInfoLengkap2)

  .verify.elementPresent(imageSelector)
  .verify.visible(nameLabelSelector)
  .getText(nameLabelSelector)

  .verify.visible(descriptionSelector)
  .getText(descriptionSelector)

  .verify.elementPresent(btnSaveSelector)
  .verify.visible(promoLabelSelector)
  .getText(promoLabelSelector)

  .verify.visible(featureTitleSelector)
  .getText(featureTitleSelector)

  .verify.visible(featureSelector1)
  .getText(featureSelector1)

  .verify.visible(featureSelector2)
  .getText(featureSelector2)

  .verify.visible(featureSelector3)
  .getText(featureSelector3)

  .verify.visible(reqSelector)
  .getText(reqSelector)

  .verify.visible(reqBodySelector)
  .getText(reqBodySelector)

  .verify.visible(reviewSelector)
  .getText(reviewSelector)

  .verify.visible(reviewBodySelector)
  .getText(reviewBodySelector)

  .verify.visible(howToApplySelector)
  .getText(howToApplySelector)

  .verify.visible(howToApplyBodySelector)
  .getText(howToApplyBodySelector)

  .verify.visible(commentSectionSelector)
  .verify.visible(sameCardSelector);
};