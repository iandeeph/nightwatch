var config = require('../../../config');
var url = config.urlGenerator(process.env.URL)('/kartu-kredit');

exports.before = function (browser) {
  browser.maximizeWindow(); // TODO: find out how to do this globally
};

exports['kartu-kredit.list.ajukan'] = function (browser) {
    var labelName = 'HSBC Visa Platinum Card';
	var inputName = 'Cermati tester';
	var inputEmail = 'kristian@cermati.com';
	var inputTelp = '08992112203';
	var inputKota = 'Jakarta Barat';
    var selectorKota = '#ui-id-2 > div';
    var inputPesan = 'tolong dibantu yaa,, prok prok prok... jadi apaaaaa........';
    var labelLimit = '99000000';

	var selectorTopCard = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(2) > div > div > h4 > a';
	var selectorBtnAjukan = '#save-creditCard > div.col-xs-12.col-sm-4.col-md-2 > a';
	var selectorLabelPage2 = '#body > div.container-fluid.nopadding > div.container.nopadding.portfolio-item.margin-bottom-20.margin-top-20 > div > div.col-lg-8.col-md-7.col-sm-12 > div.row.detail-box.margin-bottom-10 > h2';
	var selectorLabelPage3 = '#product-title';
	var selectorInputName = '#name';
	var selectorInputEmail = '#email';
	var selectorInputKota = '#city';
	var selectorInputTelp = '#phoneNumber';
    var selectorParentJmlCards = '#product-option-0';
	var selectorInputJmlCards = '#product-option-0 > option:nth-child(4)';
    var selectorInputParentBank = '#product-option-1';
    var selectorInputBank = '#product-option-1 > option:nth-child(4)';
    var selectorInputLimit = '#product-option-2';
    var selectorParentMasaAnggota = '#product-option-3';
    var selectorMasaKeanggotaan = '#product-option-3 > option:nth-child(5)';
	var selectorInputKerjaan = '#product-option-4 > option:nth-child(8)';
	var selectorInputMasaKerja = '#product-option-5 > option:nth-child(5)';
	var selectorInputStatusKerja ='#product-option-6 > option:nth-child(2)';
	var selectorInputPenghasilan = '#product-option-7 > option:nth-child(5)';
	var selectorInputPesan = '#notes-textarea';
	var selectorSyaratKetentuan = '#approval-check';

	var selectorErrorSyaratketentuan = '#requirement-error-message';
	var selectorErrornama = '#name-error';

	var selectorBtnKirim = '#apply-button';

    var selectorBtnBack = '#message-container > div:nth-child(3) > a';
    var selectorOrderId = '#order-id > span';

	browser
        .url(url)
        .waitForElementVisible('body', 1000)
        .verify.visible(selectorTopCard)
        .verify.containsText(selectorTopCard, labelName)
        .click(selectorTopCard)

        /*in detail page kartu kredit*/
        .waitForElementVisible('body', 1000)
        .verify.visible(selectorLabelPage2)
        .verify.visible(selectorBtnAjukan)
        .click(selectorBtnAjukan)

        /*in page ajukan*/
        .waitForElementVisible(selectorLabelPage3, 1000)
        .verify.containsText(selectorLabelPage3, labelName)
        .waitForElementVisible(selectorInputName, 1000)
        .waitForElementVisible(selectorInputEmail, 1000)
        .setValue(selectorInputEmail, inputEmail)
        .waitForElementVisible(selectorInputKota, 1000)
        .click(selectorInputKota)
        /*.setValue(selectorInputKota, inputKota)*/
        .waitForElementVisible(selectorKota, 1000)
        .click(selectorKota)
        .waitForElementVisible(selectorInputTelp, 1000)
        .setValue(selectorInputTelp, inputTelp)
        .waitForElementVisible(selectorInputPesan, 1000)
        .setValue(selectorInputPesan, inputPesan)

        .waitForElementVisible(selectorParentJmlCards, 1000)
        .click(selectorInputJmlCards)
        .waitForElementVisible(selectorInputParentBank, 1000)
        .click(selectorInputBank)
        .waitForElementVisible(selectorParentMasaAnggota, 1000)
        .click(selectorMasaKeanggotaan)
        .waitForElementVisible(selectorInputLimit, 1000)
        .setValue(selectorInputLimit, labelLimit)
        .click(selectorInputKerjaan)
        .click(selectorInputMasaKerja)
        .click(selectorInputStatusKerja)
        .click(selectorInputPenghasilan)

        /*try to submit with empty name & uncheck syarat & ketentuan*/
        .click(selectorBtnKirim)
        .waitForElementVisible(selectorErrorSyaratketentuan, 3000)
        .verify.visible(selectorErrorSyaratketentuan)

        /*try to submit with empty name only*/
        .click(selectorSyaratKetentuan)
        .click(selectorBtnKirim)
        .waitForElementVisible(selectorErrornama, 3000)
        .verify.visible(selectorErrornama)


        /*ok,, must be everything run well*/
        .setValue(selectorInputName, inputName)
        .click(selectorBtnKirim)

        /*in Thankyou Page*/
        .waitForElementVisible(selectorBtnBack, 1000)
        .verify.visible(selectorBtnBack)
        .verify.visible(selectorOrderId)
};