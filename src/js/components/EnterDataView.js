var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var RunDataModel = require('./RunDataModel');
var runDataCollection = require('./RunDataCollection');

var EnterDataView = Backbone.View.extend({
    template: _.template(`
        <h1 class="header">New Run</h1>
        <input id="runTime" placeholder="Run Time">
        <input id="runDate" placeholder="Run Date">
        <textarea id="runNotes" placeholder="Run Notes"></textarea>
        <button id="cancel">'Cancel'</button>
        <button id="save">"Save"</button>
        `),

    events: {
        'click #save': 'onSave',
        'click #cancel': 'onCancel'
    },

    render: function () {
        this.$el.html(this.template());
    },

    onCancel: function () {
        window.location.hash = '';
    },

    onSave: function () {
        var runTime = this.$('#runTime').val();
        var runDate = this.$('#runDate').val();
        var runNotes = this.$('#runNotes').val();
        this.collection.add({
            date: runDate,
            runTime: runTime,
            notes: runNotes
        });
        window.location.hash = '';
    }

});


module.exports = EnterDataView;