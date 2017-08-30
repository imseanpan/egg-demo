'use strict';

exports.proxyworker = {
  enable: true,
  package: 'egg-development-proxyworker',
};

// had enabled by egg
// exports.static = true;
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};
