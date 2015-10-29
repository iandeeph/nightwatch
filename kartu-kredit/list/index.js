var _ = require('lodash');

_.extend(module.exports, require('./header'));
_.extend(module.exports, require('./filter'));
_.extend(module.exports, require('./sortir'));
_.extend(module.exports, require('./bandingkan'));
_.extend(module.exports, require('./promosi'));
_.extend(module.exports, require('./info-lengkap'));
_.extend(module.exports, require('./simpan'));
_.extend(module.exports, require('./hapus'));
_.extend(module.exports, require('./ajukan'));
_.extend(module.exports, require('./related'));

module.exports['kartu-kredit.list.end'] = function (browser) {
  browser.end();
};