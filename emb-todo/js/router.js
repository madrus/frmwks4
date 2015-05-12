// Convention over configuration
// Default path for 'todos' would be '/todos'

Todos.Router.map(function () {
     this.resource('todos', { path: '/' });
});

// probably with Ember this route would still be created without explicit definition
Todos.TodosRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('todo');
    }
});
