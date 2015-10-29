var _ = require('lodash');

_.extend(module.exports, require('./header'));
_.extend(module.exports, require('./about-us'));
_.extend(module.exports, require('./artikel'));
_.extend(module.exports, require('./onecontent'));

module.exports['homepage.list.end'] = function (browser) {
  browser.end();
};