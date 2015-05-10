/** @jsx React.DOM */
// this hint is necessary for the JSXTransformer to know that it needs to transform this file to JS

var app = app || {};

(function() {
  'use strict';

  app.init = function() {
    var TodoApp = app.components.TodoApp; // we are creating a component
    React.renderComponent(
      <TodoApp />,
      document.getElementById('app')
    );
  };

  // we'll be using fixtures to retrieve our data
  app.retrieveData = function() {
    return app.FIXTURES; // this is just an easy way to make a workable prototype
  };

  app.init();
})();
