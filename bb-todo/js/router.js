window.TodoApp = new (Backbone.Router.extend({
  routes: { '' : 'index' },
  initialize: function () {
    this.todoItems = new TodoItems();
    this.todosView = new TodosView({
      collection: this.todoItems
    });
    this.todosView.render();

    // vanilla jQuery
    $('.btn-clear').click(function(e) {
      window.TodoApp.todosView.filterCompleted();
    });

    // vanilla jQuery
    $('.btn-success').click(function(e) {
      window.TodoApp.todoItems.add({ val: $('#newTodo').val(), completed: false });
      $('#newTodo').val('');
    });
  },
  index: function () {
    var fixtures = [
      { val: "thing", completed: true },
      { val: "another thing", completed: false },
      { val: "cool thing", completed: true },
      { val: "another cool thing", completed: false },
      { val: "bad thing", completed: false },
      { val: "another bad thing", completed: true },
      { val: "awesome thing", completed: false }
    ];
    $('#app').html(this.todosView.el);
    this.todoItems.reset(fixtures);
  },
  start: function () {
    Backbone.history.start();
  }
}))();
