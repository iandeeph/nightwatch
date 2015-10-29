var config = require('../../../config');
var url = config.urlGenerator(process.env.URL)('/kartu-kredit');

exports.before = function (browser) {
  browser.maximizeWindow(); // TODO: find out how to do this globally
};

exports['kartu-kredit.list.bandingkan'] = function (browser) {
  // var btnMoreCards = 'div#load-more-credit-cards';
	var btnMoreCards = '//*[@id="body"]/div[2]/div/div[2]/div/div[3]/div[1]/div[2]/div[12]/div[1]';

  browser
  .url(url)
  .waitForElementVisible(btnMoreCards, 1000)
  .click(btnMoreCards)
  .pause(10000)
  .click('//*[@id="body"]/div[2]/div/div[2]/div/div[3]/div[1]/div[2]/div[23]/div[1]')
  // .pause(10000)
  // .click(btnMoreCards + ':nth-child(2)')
  // .pause(10000)
  // .click(btnMoreCards + ':nth-child(3)')
  // .pause(10000);
  /*
  .waitForElementVisible(bandingkanSelector5, 1000)

  .click(btnThumb4)
  .click(bandingkanSelector5)

  .click(btnCompare)
  .waitForElementVisible(labelCompare1,1000)
  .waitForElementVisible(labelCompare2,1000)
  .waitForElementVisible(labelCompare3,1000)

  .assert.containsText(labelCompare1, label1)
  .assert.containsText(labelCompare1, label2)
  .assert.containsText(labelCompare1, label5);
  // */
};