var config = require('../../../config');
var url = config.urlGenerator(process.env.URL)('/kartu-kredit');

exports.before = function (browser) {
    browser.maximizeWindow(); // TODO: find out how to do this globally
};

exports['kartu-kredit.list.related'] = function (browser) {
    var btnInfoLengkap1 = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(2) > div > div > div.col-xs-12.margin-top-10.margin-bottom-20 > div > div.col-md-9.text-right.sm-text-center.nopadding > div > a:nth-child(2)';
    var btnInfoLengkap2 = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(3) > div > div > div.col-xs-12.margin-top-10.margin-bottom-20 > div > div.col-md-9.text-right.sm-text-center.nopadding > div > a:nth-child(2)';

    var labelSameBank = '#body > div.container-fluid.nopadding > div:nth-child(5) > div:nth-child(3) > h3';
    var labelSameTags = '#body > div.container-fluid.nopadding > div:nth-child(5) > div:nth-child(5) > h3';

    var selectorCardInSameBank1 = '#body > div.container-fluid.nopadding > div:nth-child(5) > div.margin-bottom-40 > div > div > div > div > span:nth-child(1) > span > div:nth-child(2) > a';
    var selectorCardInSameBank2 = '#body > div.container-fluid.nopadding > div:nth-child(5) > div.margin-bottom-40 > div > div > div > div > span:nth-child(2) > span > div:nth-child(2) > a';
    var selectorCardInSameTags1 = '#body > div.container-fluid.nopadding > div:nth-child(5) > div.line-icon-page.margin-bottom-20 > div:nth-child(1) > div:nth-child(2) > a';
    var selectorCardInSametags2 = '#body > div.container-fluid.nopadding > div:nth-child(5) > div.line-icon-page.margin-bottom-20 > div:nth-child(2) > div:nth-child(2) > a';


    browser
        .url(url)
        .waitForElementVisible('body', 1000)

        .waitForElementVisible(btnInfoLengkap1, 1000)
        .click(btnInfoLengkap1)

        .verify.elementPresent(labelSameBank)
        .verify.elementPresent(selectorCardInSameBank1)
        .verify.elementPresent(selectorCardInSameBank2)

        .verify.elementPresent(labelSameTags)
        .verify.elementPresent(selectorCardInSameTags1)
        .verify.elementPresent(selectorCardInSametags2)

        .url(url)
        .waitForElementVisible('body', 1000)

        .waitForElementVisible(btnInfoLengkap2, 1000)
        .click(btnInfoLengkap2)

        .verify.elementPresent(labelSameBank)
        .verify.elementPresent(selectorCardInSameBank1)
        .verify.elementPresent(selectorCardInSameBank2)

        .verify.elementPresent(labelSameTags)
        .verify.elementPresent(selectorCardInSameTags1)
        .verify.elementPresent(selectorCardInSametags2)
};