/**
 * Two-way data binding in Ember is achieved through
 * getters and setters. A setter takes care of all
 * the dependencies behind the curtains, so we don't
 * have to worry about them
 */
Todos.TodoController = Ember.ObjectController.extend({
    actions: {
      removeTodo: function () {
        var todo = this.get('model');
        todo.deleteRecord();
        todo.save();
      }
    }
});

Todos.TodosController = Ember.ArrayController.extend({
    actions: {
      createNewTodo: function () {
        var newVal = this.get('newTodo');
        var todo = this.store.createRecord('todo', {
          val: newVal,
          completed: false
        });
        this.set('newTodo', '');
        todo.save();
      },
      clearCompleted: function () {
        var completed = this.filterBy('completed', true);
        completed.invoke('deleteRecord');
        completed.invoke('save');
      }
    }
});
