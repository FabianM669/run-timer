var Backbone = require('backbone');
var $ = require('jquery');
var AppRouter = require('./components/AppRouter');
var AppView = require('./components/AppView');
var HeaderView = require('./components/HeaderView');

var appView = new AppView();
var headerView = new HeaderView();
var appRouter = new AppRouter();

headerView.render();

appView.render();

$('#entryPoint').append(headerView.$el);

$('#entryPoint').append(appView.$el);

Backbone.history.start();



// var EnterDataView = require('./components/EnterDataView.js');
// var ReviewEntryView = require('./components/ReviewEntryView');
// var SingleRunView = require('./components/SingleRunView');
// var ListView = require('./components/ListView');
// var $ = require('jquery');
// var RunDataCollection = require('./components/RunDataCollection');

// var enterDataView = new EnterDataView();
// var reviewEntryView = new ReviewEntryView();
// var singleRunView = new SingleRunView();
// var runDataCollection = new RunDataCollection([{},{},{}]);
// var listView = new ListView({collection: runDataCollection});

// enterDataView.render();
// $('#entryPoint').append(enterDataView.$el);

// reviewEntryView.render();
// $('#entryPoint').append(reviewEntryView.$el);

// singleRunView.render();
// $('#entryPoint').append(singleRunView.$el);

// listView.render();
// $('#entryPoint').append(listView.$el);

// var Backbone = require('backbone');
// var $ = require('jquery');

// var AppRouter = require('./components/AppRouter');
// var AppView = require('./components/AppView');
// var HeaderView = require('./components/HeaderView');

// var router = new AppRouter();

// var appView = new AppView();

// var headerView = new HeaderView();

// headerView.render();

// appView.render();

// $('#app-container').append(headerView.$el);

// $('#app-container').append(appView.$el);

// Backbone.history.start();
