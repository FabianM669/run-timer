var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var SingleRunView = require('./SingleRunView');


var ListView = Backbone.View.extend({

    className: 'runs',

    template: _.template(`
        <div class="runsList"></div>
        <button class="add">+</button>
        `),

    initialize: function () {
        this.children = [];
        this.render();
    },

    render: function () {

        var _this = this;

        this.$el.html(this.template());

        this.children.forEach(function (view) {
            view.remove();
        });

        this.children = this.collection.map(function (currentModel) {
            return new SingleRunView({model: currentModel});
        });

        this.children.forEach(function (view) {
            view.render();
            _this.$('.runsList').append(view.$el);
        });
    },

    events: {
        'click .add': 'newRun'
    },

    newRun: function () {
        window.location.hash = 'enterData';
    }
});

module.exports = ListView;