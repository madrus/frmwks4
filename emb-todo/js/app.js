// EmberJS has dependencies on Handlebars and jQuery
// These should be defined before we can use EmberJS

window.Todos = Ember.Application.create();

// The concept of data adapter gives the possibility to switch
// between different data sources on the fly, like between a local source and remote via AJAX

// Data Adapter
Todos.ApplicationAdapter = DS.FixtureAdapter.extend();
