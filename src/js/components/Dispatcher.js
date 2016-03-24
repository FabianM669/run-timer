var Backbone = require('backbone');
var _ = require('underscore');

var Dispatcher = {};

_.extend(Dispatcher, Backbone.Events);

module.exports = Dispatcher;