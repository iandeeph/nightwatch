var config = require('../../../config');
var url = config.urlGenerator(process.env.URL)('/kartu-kredit');

exports.before = function (browser) {
    browser.maximizeWindow(); // TODO: find out how to do this globally
};

exports['kartu-kredit.list.promosi'] = function (browser) {
    var buttonPromo = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(2) > div > div > div.col-xs-12.margin-top-10.margin-bottom-20 > div > div.col-md-9.text-right.sm-text-center.nopadding > div > a.btn.btn-action';
    var labelTitlePromo = '#body > div.container.margin-bottom-40 > div.col-lg-9.padding-right-30 > h1';
    var labelListPromo = '#body > div.container.margin-bottom-40 > div.col-lg-9.padding-right-30 > div:nth-child(2) > div:nth-child(1) > div.col-md-7.col-sm-12 > h3 > a';

    browser
        .url(url)
        .waitForElementVisible('body', 1000)

        .waitForElementVisible(buttonPromo, 1000)
        .click(buttonPromo)

        .verify.elementPresent(labelTitlePromo)
        .verify.elementPresent(labelListPromo)
        .getText(labelTitlePromo)
        .getText(labelListPromo)
};