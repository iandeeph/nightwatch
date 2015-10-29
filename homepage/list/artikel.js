var config = require('../../../config');
var url = config.urlGenerator(process.env.URL)('/artikel');

exports.before = function (browser) {
  browser.maximizeWindow(); // TODO: find out how to do this globally
};

exports['homepage.list.artikel'] = function (browser) {
	var selectorArticle1 = "#body > div.container.content > div > div.col-md-9.md-margin-bottom-40 > div:nth-child(1) > div.col-md-7 > a > h2";
	var selectorArticle2 = "#body > div.container.content > div > div.col-md-9.md-margin-bottom-40 > div:nth-child(3) > div.col-md-7 > a > h2";
	var selectorArticle3 = "#body > div.container.content > div > div.col-md-9.md-margin-bottom-40 > div:nth-child(19) > div.col-md-7 > a > h2";

	var selectorBtnToPageTwo = "#body > div.container.content > div > div.col-md-9.md-margin-bottom-40 > div:nth-child(21) > div > ul > li:nth-child(2) > a";
	var selectorBtnToPageThree = "#body > div.container.content > div > div.col-md-9.md-margin-bottom-40 > div:nth-child(21) > div > ul > li:nth-child(4) > a";

  browser
	  .url(url)
	  .waitForElementVisible('body', 1000)
	  .assert.elementPresent(selectorArticle1)
	  .assert.elementPresent(selectorArticle2)
	  .assert.elementPresent(selectorArticle3)
	  .click(selectorBtnToPageTwo)
	  .waitForElementVisible('body', 1000)
	  .assert.elementPresent(selectorArticle1)
	  .assert.elementPresent(selectorArticle2)
	  .assert.elementPresent(selectorArticle3)
	  .click(selectorBtnToPageThree)
	  .waitForElementVisible('body', 1000)
	  .assert.elementPresent(selectorArticle1)
	  .assert.elementPresent(selectorArticle2)
	  .assert.elementPresent(selectorArticle3);
	};