var Backbone = require('backbone');
var _ = require('underscore');

var ReviewEntry = Backbone.View.extend({

    className: 'details',

    events: {
        'click .goBack': 'toGoBack',
        'click .detailsCreate': 'toCreateView'
    },

    template: _.template(`
        <h2 class="headerText">My Run</h2>
        <%= date %>
        <%= time %>
        <%= notes %>
        <button class="goBack">To Go Back</button>
        `),

    render: function () {
        this.$el.html(this.template(this.model.attributes));
    },

    toGoBack: function (e) {
        window.location.hash = '';
    },

    toCreateView: function (e) {
        window.location.hash = 'create';
    }

});

module.exports = ReviewEntry;