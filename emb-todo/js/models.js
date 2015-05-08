// we are using the optional Ember.Data library

// This is called a schema for the model
// It gives you strong types, so that you get an error 
// if you try to put a boolean into a string
Todos.Todo = DS.Model.extend({
    val: DS.attr('string'),
    completed: DS.attr('boolean')
});