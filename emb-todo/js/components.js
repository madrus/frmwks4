// Ember components are a bit similar to angular directives
// They are essentially web components
// A component is essentially
// This click function is for the X-button on every todo item
// It is bound to HTML component by <script type="text/x-handlebars" id="components/todo-entry">
Todos.TodoEntryComponent = Ember.Component.extend({
  actions: {
    click: function () {
      this.sendAction('remove');
    }
  }
});
