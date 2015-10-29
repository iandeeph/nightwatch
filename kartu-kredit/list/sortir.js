var config = require('../../../config');
var url = config.urlGenerator(process.env.URL)('/kartu-kredit');

exports.before = function (browser) {
    browser.maximizeWindow(); // TODO: find out how to do this globally
};

exports['kartu-kredit.list.sortir'] = function (browser) {
    var selectorIuranTahunan = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.listing-header > div > div.col-md-4.hidden-xs.hidden-sm > div > div:nth-child(1) > div > span';
    var selectorCashBack = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.listing-header > div > div.col-md-4.hidden-xs.hidden-sm > div > div:nth-child(2) > div > span';

    var textLowestIuranTahunan = 'free seumur hidup';
    var textLowestCashback = '-';

    var selectorLabelIuranTahunan = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(2) > div > div > div.table.responsive.bspan-5.nomargin > div > div:nth-child(3) > span';
    var SekectorLabelCashback = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(2) > div > div > div.table.responsive.bspan-5.nomargin > div > div:nth-child(4) > div';

    browser
        .url(url)
        .waitForElementVisible('body', 1000)

        /* mencari nilai terendah (klik sortir Iuaran Tahunan 1x) */

        .waitForElementVisible(selectorIuranTahunan, 1000)
        .click(selectorIuranTahunan)

        .waitForElementVisible(selectorLabelIuranTahunan, 1000)
        .verify.containsText(selectorLabelIuranTahunan, textLowestIuranTahunan)

        /* mencari nilai tertinggi (klik sortir Iuaran Tahunan 1x lagi) */

        .waitForElementVisible(selectorIuranTahunan, 1000)
        .click(selectorIuranTahunan)

        this.demoTest = function (browser) {
            browser.waitForElementVisible(selectorLabelIuranTahunan, 1000)
            browser.expect.element(selectorLabelIuranTahunan).text.to.not.equal(textLowestIuranTahunan);
        };
    browser
        .url(url)
        .waitForElementVisible('body', 1000)

        /* mencari nilai terendah (klik sortir cashback 1x) */

        .waitForElementVisible(selectorCashBack, 1000)
        .click(selectorCashBack)

        .waitForElementVisible(SekectorLabelCashback, 1000)
        .verify.containsText(SekectorLabelCashback, textLowestCashback)

        /* mencari nilai tertinggi (klik sortir cashback 1x lagi) */

        .waitForElementVisible(selectorCashBack, 1000)
        .click(selectorCashBack)

         this.demoTest = function (browser) {
             browser.waitForElementVisible(SekectorLabelCashback, 1000)
             browser.expect.element(SekectorLabelCashback).text.to.not.equal(textLowestCashback);
         };
};