var Backbone = require('backbone');

var ids = 0;

var RunDataModel = Backbone.Model.extend({

    defaults: {
        'date': '',
        'time': '00:00:00',
        'notes': ''

    },

    initialize: function () {
        this.set('id', ++ids);
    }
});

module.exports = RunDataModel;

