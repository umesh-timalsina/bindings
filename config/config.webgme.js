// DO NOT EDIT THIS FILE
// This file is automatically generated from the webgme-setup-tool.
'use strict';


var config = require('webgme-engine/config/config.default');
// The paths can be loaded from the webgme-setup.json
config.plugin.basePaths.push(__dirname + '/../src/plugins');





config.rest.components['BindingsDocs'] = {
  src: __dirname + '/../src/routers/BindingsDocs/BindingsDocs.js',
  mount: 'bindings-docs',
  options: {}
};

// Visualizer descriptors

// Add requirejs paths
config.requirejsPaths = {
  'webgme-bindings': './src/common'
};


config.mongo.uri = 'mongodb://127.0.0.1:27017/webgme_core_bindings';
module.exports = config;
