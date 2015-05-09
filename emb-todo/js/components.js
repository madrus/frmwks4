// Ember components are a bit similar to angular directives
// They are essentially web components
Todos.TodoEntryComponent = Ember.Component.extend({
  actions: {
    click: function () {
      this.sendAction('remove');
    }
  }
});
