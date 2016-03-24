var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var Dispatcher = require('./Dispatcher');
var ListView = require('./ListView');
var ReviewEntryView = require('./ReviewEntryView');
var EnterDataView = require('./EnterDataView');

var runDataCollection = require('./RunDataCollection');

runDataCollection.add([
    { date: 'June 6, 2016', time: '01:01:02' },
    { date: 'June 7, 2016', time: '01:01:02' },
    { date: 'June 8, 2016', time: '01:02:02' }
]);

var AppRouter = Backbone.Router.extend({

    routes: {
        '': 'homeView',
        'details/:id': 'review',
        'enterData': 'enterData'
    },

    homeView: function () {
        Dispatcher.trigger('show', new ListView({ collection: runDataCollection }));
    },

    review: function (id) {
        var model = runDataCollection.find({ id: parseInt(id) });

        Dispatcher.trigger('show', new ReviewEntryView({ model: model }));
    },

    enterData: function () {
        console.log("trigger the enterData");
        Dispatcher.trigger('show', new EnterDataView({ collection: runDataCollection }));
    }

});

module.exports = AppRouter;