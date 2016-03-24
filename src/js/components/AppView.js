// AppView is going to be the container for my app

var Backbone = require('backbone');
var Dispatcher = require('./Dispatcher');
var _ = require('underscore');
var $ = require('jquery');

var AppView = Backbone.View.extend({

    className: 'app',

    template: _.template(`
        <div class="pageSlot"></div>
    `),

    initialize: function (options) {
        this.listenTo(Dispatcher, 'show', this.show);
    },

    show: function (view) {
        console.log('this is the show');
        console.log(view);

        if (view) {
            if (this.child) {
                this.child.remove();
            }

            view.render();

            this.$('.pageSlot').append(view.$el);
            this.child = view;
        }
    },

    render: function () {
        this.$el.html(this.template());
    }
});

module.exports = AppView;