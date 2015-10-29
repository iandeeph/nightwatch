var config = require('../../../config');
var url = config.urlGenerator(process.env.URL)('/kartu-kredit');
var urlMe = config.urlGenerator(process.env.URL)('/me');
var urlAllCards = config.urlGenerator(process.env.URL)('/me/creditCards');

exports.before = function (browser) {
  browser.maximizeWindow(); // TODO: find out how to do this globally
};

exports['kartu-kredit.list.hapus'] = function (browser) {
  var email = 'kristian@cermati.com'
  var password = 'testercermati'

  var btnSignin = 'body > div.wrapper.header-fixed > div.header.new-header > div > div > div.collapse.navbar-collapse.navbar-responsive-collapse.nomargin.text-right > span > a';
  var inputEmail = '#signin-email';
  var inputPassword = '#signin-password';
  var btnSigninLast = '#modal-auth > div > div > div.auth-box.modal-pane-signin.hiddens > div.modal-body > form > button';

  var btnInfoLengkap1 = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(2) > div > div > div.col-xs-12.margin-top-10.margin-bottom-20 > div > div.col-md-9.text-right.sm-text-center.nopadding > div > a:nth-child(2)';
  var labelSelector1 = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(2) > div > div > h4 > a';
  var labelSelectorAllCards1 = '#scrollbar4 > div:nth-child(1) > div > div > a';
  var label1 = 'HSBC Visa Platinum Card';

  var btnInfoLengkap2 = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(3) > div > div > div.col-xs-12.margin-top-10.margin-bottom-20 > div > div.col-md-9.text-right.sm-text-center.nopadding > div > a:nth-child(2)';
  var labelSelector2 = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(3) > div > div > h4 > a';
  var labelSelectorAllCards2 = '#scrollbar4 > div:nth-child(2) > div > div > a';
  var label2 = 'Citi Cash Back';

  var btnInfoLengkap3 = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(4) > div > div > div.col-xs-12.margin-top-10.margin-bottom-20 > div > div.col-md-9.text-right.sm-text-center.nopadding > div > a:nth-child(2)';
  var labelSelector3 = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(4) > div > div > h4 > a';
  var labelSelectorAllCards3 = '#scrollbar4 > div:nth-child(3) > div > div > a';
  var label3 = 'Danamon Platinum';

  var btnInfoLengkap4 = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(5) > div > div > div.col-xs-12.margin-top-10.margin-bottom-20 > div > div.col-md-9.text-right.sm-text-center.nopadding > div > a:nth-child(2)';
  var labelSelector4 = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(5) > div > div > h4 > a';
  var labelSelectorAllCards4 = ' #scrollbar4 > div:nth-child(4) > div > div > a';
  var label4 = 'Garuda Indonesia Citi Card';

  var btnInfoLengkap5 = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(6) > div > div > div.col-xs-12.margin-top-10.margin-bottom-20 > div > div.col-md-9.text-right.sm-text-center.nopadding > div > a:nth-child(2)';
  var labelSelector5 = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(6) > div > div > h4 > a';
  var labelSelectorAllCards5= '#scrollbar4 > div:nth-child(5) > div > div > a';
  var label5 = 'HSBC Visa Signature Card';

  var btnInfoLengkap6 = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(7) > div > div > div.col-xs-12.margin-top-10.margin-bottom-20 > div > div.col-md-9.text-right.sm-text-center.nopadding > div > a:nth-child(2)';
  var labelSelector6 = '#body > div.container-fluid > div > div.container > div > div.col-lg-9.col-xs-12.credit-cards > div.table-search-with-header > div.table-search > div:nth-child(7) > div > div > h4 > a';
  var labelSelectorAllCards6 = '#scrollbar4 > div:nth-child(6) > div > div > a';
  var label6 = 'Citi Rewards Card';

  var labelSelectorNextPage = '#body > div.container-fluid.nopadding > div.container.nopadding.portfolio-item.margin-bottom-20.margin-top-20 > div > div.col-lg-8.col-md-7.col-sm-12 > div.row.detail-box.margin-bottom-10 > h2';
  var btnTambahkan = '#save-creditCard > div:nth-child(2) > button > i';

  var labelDompetSelector = '#sidebar-nav-1 > li.list-group-item.active > a';
  var labelDompet = 'Dompet';

  browser
  .url(url)
  .waitForElementVisible(btnSignin, 1000)
  .click(btnSignin)
  .waitForElementVisible(inputEmail, 1000)
  .setValue(inputEmail, email)
  .setValue(inputPassword, password)
  .click(btnSigninLast)
  .url(urlMe)
  .waitForElementVisible(labelDompetSelector, 1000)
  .assert.containsText(labelDompetSelector, labelDompet)

  .url(urlAllCards)
  .verify.containsText(labelSelectorAllCards1, label1)
  .verify.containsText(labelSelectorAllCards2, label2)
  .verify.containsText(labelSelectorAllCards3, label3)
  .verify.containsText(labelSelectorAllCards4, label4)
  .verify.containsText(labelSelectorAllCards5, label5)
  .verify.containsText(labelSelectorAllCards6, label6)

  .url(url)
  .waitForElementVisible(btnInfoLengkap1, 1000)
  .assert.containsText(labelSelector1, label1)
  .click(btnInfoLengkap1)
  .assert.containsText(labelSelectorNextPage,label1)
  .click(btnTambahkan)

  .url(url)
  .waitForElementVisible(btnInfoLengkap2, 1000)
  .assert.containsText(labelSelector2, label2)
  .click(btnInfoLengkap2)
  .assert.containsText(labelSelectorNextPage,label2)
  .click(btnTambahkan)

  .url(url)
  .waitForElementVisible(btnInfoLengkap3, 1000)
  .assert.containsText(labelSelector3, label3)
  .click(btnInfoLengkap3)
  .assert.containsText(labelSelectorNextPage,label3)
  .click(btnTambahkan)

  .url(url)
  .waitForElementVisible(btnInfoLengkap4, 1000)
  .assert.containsText(labelSelector4, label4)
  .click(btnInfoLengkap4)
  .assert.containsText(labelSelectorNextPage,label4)
  .click(btnTambahkan)

  .url(url)
  .waitForElementVisible(btnInfoLengkap5, 1000)
  .assert.containsText(labelSelector5, label5)
  .click(btnInfoLengkap5)
  .assert.containsText(labelSelectorNextPage,label5)
  .click(btnTambahkan)

  .url(url)
  .waitForElementVisible(btnInfoLengkap6, 1000)
  .assert.containsText(labelSelector6, label6)
  .click(btnInfoLengkap6)
  .assert.containsText(labelSelectorNextPage,label6)
  .click(btnTambahkan);
};