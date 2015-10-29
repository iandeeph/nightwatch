var config = require('../../../config');
var url = config.urlGenerator(process.env.URL)('/kartu-kredit');

exports.before = function (browser) {
  browser.maximizeWindow(); // TODO: find out how to do this globally
};

exports['kartu-kredit.list.filter'] = function (browser) {
    var valueMinIuranTahunan = '0';
    var valueMaxIuranTahunan = 'Rp100.000';
    var valuePenghasilanTahunan = '36000000';
    var valuePenghasilanPerBulan = 'Rp3.000.000'; /*penghasilan tahunan dibagi 12 bulan*/

    var labelTitleCards1 = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(2) > div > div > h4 > a';
    var labelTitleCards2 = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(3) > div > div > h4 > a';
    var labelTitleCards3 = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(4) > div > div > h4 > a';
    var labelIuranTahunan = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(2) > div > div > div.table.responsive.bspan-5.nomargin > div > div:nth-child(3) > div';
    var labelPenghasilanBulanan = '#body > div.container-fluid.nopadding > div:nth-child(2) > div > div:nth-child(6) > div > div:nth-child(1) > div.td';

    var selectorLabelIuranTahunan = '#cardFilter > fieldset > section > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > label';
    var selectorInputMinIuranTahunan = '#cardFilter > fieldset > section > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input.masked-input';
    var selectorInputMaxIuranTahunan = '#cardFilter > fieldset > section > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > input.masked-input';
    var selectorSortirIuranTahunan = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.listing-header > div > div.col-md-4.hidden-xs.hidden-sm > div > div:nth-child(1) > div > span';
    var selectorPenghasilanTahunan = '#cardFilter > fieldset > section > div > div:nth-child(1) > div:nth-child(3) > div.col-xs-12.grouped-input > input.masked-input';
    var selectorCheckProviderLainnye = '#networkFilter > label:nth-child(1) > input[type="checkbox"]';
    var selectorCheckProviderMasterCard = '#networkFilter > label:nth-child(2) > input[type="checkbox"]';
    var selectorCheckProviderVisa = '#networkFilter > label:nth-child(3) > input[type="checkbox"]';
    var selectorCheckProviderJCB = '#networkFilter > label:nth-child(4) > input[type="checkbox"]';
    var selectorCheckProviderAmericanExpress = '#networkFilter > label:nth-child(5) > input[type="checkbox"]';
    var selectorCheckIssuerAEON = '#issuerFilter > label:nth-child(1) > input[type="checkbox"]';
    var selectorCheckIssuerANZ = '#issuerFilter > label:nth-child(2) > input[type="checkbox"]';
    var selectorCheckIssuerBCA = '#issuerFilter > label:nth-child(3) > input[type="checkbox"]';
    var selectorCheckIssuerBNI = '#issuerFilter > label:nth-child(4) > input[type="checkbox"]';
    var selectorCheckIssuerBNISyariah = '#issuerFilter > label:nth-child(5) > input[type="checkbox"]';


    var btnInfoLengkap1 = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(2) > div > div > div.col-xs-12.margin-top-10.margin-bottom-20 > div > div.col-md-9.text-right.sm-text-center.nopadding > div > a:nth-child(2)';


    browser
        /*IURAN TAHUNAN FILTER*/
        .url(url)
        .waitForElementVisible('body', 1000)
        .waitForElementVisible(selectorLabelIuranTahunan, 1000)

        .waitForElementVisible(selectorInputMinIuranTahunan, 1000)
        .click(selectorInputMinIuranTahunan)
        .clearValue(selectorInputMinIuranTahunan)
        .setValue(selectorInputMinIuranTahunan, valueMinIuranTahunan)
        .click(selectorLabelIuranTahunan)

        .waitForElementVisible(selectorInputMaxIuranTahunan, 1000)
        .click(selectorInputMaxIuranTahunan)
        .clearValue(selectorInputMaxIuranTahunan)
        .setValue(selectorInputMaxIuranTahunan, valueMaxIuranTahunan)
        .click(selectorLabelIuranTahunan)

        .waitForElementVisible(selectorSortirIuranTahunan, 1000)
        .click(selectorSortirIuranTahunan)

        .waitForElementVisible(labelIuranTahunan, 1000)
        .verify.containsText(labelIuranTahunan, valueMinIuranTahunan)

        .waitForElementVisible(selectorSortirIuranTahunan, 1000)
        .click(selectorSortirIuranTahunan)

        .waitForElementVisible(labelIuranTahunan, 1000)
        .verify.containsText(labelIuranTahunan, valueMaxIuranTahunan)

        /*PENGHASILAN TAHUNAN FILTER*/
        .url(url)
        .waitForElementVisible('body', 1000)
        .waitForElementVisible(selectorLabelIuranTahunan, 1000)

        .waitForElementVisible(selectorPenghasilanTahunan, 1000)
        .click(selectorPenghasilanTahunan)
        .clearValue(selectorPenghasilanTahunan)
        .click(selectorLabelIuranTahunan)

        .waitForElementVisible(btnInfoLengkap1, 1000)
        .click(btnInfoLengkap1)

        .waitForElementVisible(labelPenghasilanBulanan, 1000)
        .verify.containsText(labelPenghasilanBulanan, valuePenghasilanPerBulan)

        /*Provider Kartu*/
        .url(url)
        .waitForElementVisible('body', 1000)

        .waitForElementVisible(selectorCheckProviderLainnye, 1000)
        .click(selectorCheckProviderLainnye)
        .pause(5000)
        .click(selectorCheckProviderLainnye)

        .waitForElementVisible(selectorCheckProviderMasterCard, 1000)
        .click(selectorCheckProviderMasterCard)
        .pause(5000)
        .click(selectorCheckProviderMasterCard)

        .waitForElementVisible(selectorCheckProviderVisa, 1000)
        .click(selectorCheckProviderVisa)
        .pause(5000)
        .click(selectorCheckProviderVisa)

        .waitForElementVisible(selectorCheckProviderJCB, 1000)
        .click(selectorCheckProviderJCB)
        .pause(5000)
        .click(selectorCheckProviderJCB)

        .waitForElementVisible(selectorCheckProviderAmericanExpress, 1000)
        .click(selectorCheckProviderAmericanExpress)
        .pause(5000)
        .click(selectorCheckProviderAmericanExpress)

        .waitForElementVisible(selectorCheckProviderLainnye, 1000)
        .click(selectorCheckProviderLainnye)
        .waitForElementVisible(selectorCheckProviderJCB, 1000)
        .click(selectorCheckProviderJCB)
        .waitForElementVisible(selectorCheckProviderAmericanExpress, 1000)
        .click(selectorCheckProviderAmericanExpress)
        .pause(15000)
        .waitForElementVisible(selectorCheckProviderLainnye, 1000)
        .click(selectorCheckProviderLainnye)
        .waitForElementVisible(selectorCheckProviderJCB, 1000)
        .click(selectorCheckProviderJCB)
        .waitForElementVisible(selectorCheckProviderAmericanExpress, 1000)
        .click(selectorCheckProviderAmericanExpress)

        /*penerbit Kartu*/
        .url(url)
        .waitForElementVisible('body', 1000)

        .waitForElementVisible(selectorCheckIssuerAEON, 1000)
        .click(selectorCheckIssuerAEON)
        .waitForElementVisible(labelTitleCards1, 1000)
        .verify.containsText(labelTitleCards1, 'AEON')
        .click(selectorCheckIssuerAEON)

        .waitForElementVisible(selectorCheckIssuerANZ, 1000)
        .click(selectorCheckIssuerANZ)
        .waitForElementVisible(labelTitleCards1, 1000)
        .verify.containsText(labelTitleCards1, 'ANZ')
        .waitForElementVisible(labelTitleCards2, 1000)
        .verify.containsText(labelTitleCards2, 'ANZ')
        .waitForElementVisible(labelTitleCards3, 1000)
        .verify.containsText(labelTitleCards3, 'ANZ')
        .click(selectorCheckIssuerANZ)

        .waitForElementVisible(selectorCheckIssuerBCA, 1000)
        .click(selectorCheckIssuerBCA)
        .waitForElementVisible(labelTitleCards1, 1000)
        .verify.containsText(labelTitleCards1, 'BCA')
        .waitForElementVisible(labelTitleCards2, 1000)
        .verify.containsText(labelTitleCards2, 'BCA')
        .waitForElementVisible(labelTitleCards3, 1000)
        .verify.containsText(labelTitleCards3, 'BCA')
        .click(selectorCheckIssuerBCA)

        .waitForElementVisible(selectorCheckIssuerBNI, 1000)
        .click(selectorCheckIssuerBNI)
        .waitForElementVisible(labelTitleCards1, 1000)
        .verify.containsText(labelTitleCards1, 'BNI')
        .waitForElementVisible(labelTitleCards2, 1000)
        .verify.containsText(labelTitleCards2, 'BNI')
        .waitForElementVisible(labelTitleCards3, 1000)
        .verify.containsText(labelTitleCards3, 'BNI')
        .click(selectorCheckIssuerBNI)

        .waitForElementVisible(selectorCheckIssuerBNISyariah, 1000)
        .click(selectorCheckIssuerBNISyariah)
        .waitForElementVisible(labelTitleCards1, 1000)
        .verify.containsText(labelTitleCards1, 'BNI Syariah')
        .waitForElementVisible(labelTitleCards2, 1000)
        .verify.containsText(labelTitleCards2, 'BNI Syariah')
        .waitForElementVisible(labelTitleCards3, 1000)
        .verify.containsText(labelTitleCards3, 'BNI Syariah')
        .click(selectorCheckIssuerBNISyariah)


        /*Random Filter*/
        .waitForElementVisible(selectorCheckIssuerAEON, 1000)
        .click(selectorCheckIssuerAEON)
        .waitForElementVisible(selectorCheckIssuerBCA, 1000)
        .click(selectorCheckIssuerBCA)
        .pause(15000)
        .waitForElementVisible(selectorCheckProviderLainnye, 1000)
        .click(selectorCheckProviderLainnye)
        .pause(15000)
        .waitForElementVisible(selectorCheckProviderVisa, 1000)
        .click(selectorCheckProviderVisa)
        .pause(15000)
};