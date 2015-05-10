/** @jsx React.DOM */
// this hint is necessary for the JSXTransformer to know that it needs to transform this file to JS

var app = app || {};
app.components = app.components || {};

(function() {
  'use strict';
  var TodoApp = app.components.TodoApp = React.createClass({
    getInitialState: function() {
      return {
        todos: []
      };
    },
    componentDidMount: function() {
      // here you can put any command to get data, e.g. AJAX request
      // also in most React tutorials, AJAX requests are done in componentDidMount
      var data = app.retrieveData();
      this.setState({ todos: data });
      // console.log(this.state); // we can see what we get
    },
    clearCompleted: function() {
      var newTodos = this.state.todos.filter(function(el, index) {
        return !el.completed;
      });
      this.setState({ todos: newTodos }); // this is another way to set the state
    },
    createNewTodo: function(newValue) {
      var state = this.state;
      state.todos.unshift({ val: newValue, completed: false }); // use push if you want to add at the bottom
      this.setState(state);
    },
    updateVal: function(val, index) {
      var state = this.state;
      state.todos[index].val = val;
      this.setState(state); // we are explicitely using a setter here
      // instead of what would seem an easier way:
      // this.state.todos[index].val = val;
    },
    toggleCompleted: function(index) {
      var state = this.state;
      state.todos[index].completed = !state.todos[index].completed;
      this.setState(state);
    },
    deleteTodo: function(index) {
      var state = this.state;
      state.todos.splice(index, 1);
      this.setState(state);
    },
    render: function() {
      return (
        <div className="outer-container">
          <NewTodo
            createNewTodo={this.createNewTodo}
          />
          <TodoList
            todos={this.state.todos} // this is a prop on the TodoList that we are passing
            updateVal={this.updateVal} // here, we are passing down the function from TodoApp to TodoList
            toggleCompleted={this.toggleCompleted}
            deleteTodo={this.deleteTodo}
          />
          <ClearCompleted
            clearCompleted={this.clearCompleted}
          />
        </div>
      );
    }
  });

  /**
   * Here, we can create a bunch of components and throw them on the page
   * Moreover, the components are nestable, so they can be reused in many places
   * This also makes them testable */
  var NewTodo = app.components.NewTodo = React.createClass({
    // we will be using the version of React with mixins
    // from the mixins library, we will be using LinkedStateMixin
    // then we don't have to write the implementation of onChange event
    mixins: [React.addons.LinkedStateMixin],
    // This NewTodo is not important to its parent, so it has to get its own state
    // When we need state, we always have to use getInitialState function
    getInitialState: function() {
      return {
        newValue: '' // a blank string
      };
    },
    handleNewTodo: function(e) {
      // funny thing is that swapping the following 2 statements makes no difference - it still works
      // theoretically speaking, it shouldn't but it does
      this.props.createNewTodo(this.state.newValue);
      this.setState({ newValue: '' });
    },
    render: function() {
      return (
        <div className="add-todo-group input-group input-group-lg">
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-list-alt"></i>
          </span>
          <input valueLink={this.linkState('newValue')} placeholder="New Todo" className="form-control" type="text" />
          <span className="input-group-btn">
            <button onClick={this.handleNewTodo} className="btn btn-success" type="button">
              <i className="glyphicon glyphicon-plus"></i>
            </button>
          </span>
        </div>
      );
    }
  });

  var TodoList = app.components.NewTodo = React.createClass({
    render: function() {
      return (
        <div className="todos">
          {this.props.todos.map(function(el, index) {
            return (
              <TodoItem
                todo={el} // these two elements are props on the child TodoItem
                index={index}
                updateVal={this.props.updateVal}
                toggleCompleted={this.props.toggleCompleted}
                deleteTodo={this.props.deleteTodo}
              />
            );
            // we need to bind this in order to change the 'this' context to 'this.props.todos'
            // because it is an array of 'todos' that is being mapped over and updateVal is passed to
            // via props inside the function(el, index)
          }.bind(this))}
        </div>
      );
    }
  });

  var TodoItem = app.components.TodoItem = React.createClass({
    handleVal: function(e) {
      this.props.updateVal(e.target.value, this.props.index); // vanilla JS
    },
    handleToggle: function(e) {
      this.props.toggleCompleted(this.props.index);
    },
    handleDelete: function(e) {
      this.props.deleteTodo(this.props.index);
    },
    render: function() {
      var inputClassName = "form-control";
      if (this.props.todo.completed) {
        inputClassName += " finished";
      }

      return (
        <div className="input-group input-group-lg">
          <span className="input-group-addon">
            <input onChange={this.handleToggle} checked={this.props.todo.completed} type="checkbox" />
          </span>
          <input onChange={this.handleVal} type="text" value={this.props.todo.val} className={inputClassName} />
          <span className="input-group-btn">
            <button onClick={this.handleDelete} className="btn btn-danger" type="button">
              <i className="glyphicon glyphicon-remove"></i>
            </button>
          </span>
        </div>
      );
    }
  });

  var ClearCompleted = app.components.ClearCompleted = React.createClass({
    handleClick: function(e) {
      this.props.clearCompleted();
    },
    render: function() {
      return (
        <div className="btn-clear-group">
          <button onClick={this.handleClick} className="btn btn-primary btn-clear">
            Clear Completed
          </button>
        </div>
      );
    }
  });
})();
