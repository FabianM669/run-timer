var Backbone = require('backbone');
var RunDataModel = require('./RunDataModel');

var RunDataCollection = Backbone.Collection.extend({
    model: RunDataModel
});

module.exports = new RunDataCollection();