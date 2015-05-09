/**
 * IMPORTANT! Don't put any logic into views, leave that all to models
 */
window.TodoView = Backbone.View.extend({
  initialize: function() {
    // these are events when something changes on the model
    // this.model.on('change', this.render, this); // any time anything changes, rerender
    this.listenTo(this.model, 'change', this.render); // listenTo is a better way to handle events
  },
  events: {
    // these are events when something changes on the DOM
    'change input[type=checkbox]' : 'toggle', // change is event, the rest is jQuery selector
    'change .form-control' : 'update',
    'click .btn-danger' : 'remove'
  },
  toggle: function() {
    this.model.toggle();
  },
  update: function() {
    this.model.updateText(this.$('.form-control').val());
  },
  remove: function() {
    this.model.destroy();
  },
  /**
  * We are using underscore templates here but this is just an example
  * There are many other template languages out there and you can use
  * any one of those instead. Just any function returning HTML code
  */
  template: _.template('<span class="input-group-addon"><input <%= completed ? "checked=checked" : "" %> type="checkbox"></span><input value="<%= val %>" class="form-control<%= completed ? " finished" : "" %>" type="text"><span class="input-group-btn"><button class="btn btn-danger" type="button"><i class="glyphicon glyphicon-remove"></i></button></span>'),
  render: function() {
    /**
     * $el is a DOM element wrapped in jQuery
     * we are going to use underscore template here
     * but it can be any template */
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  className: 'input-group input-group-lg' // your own parent class names
});

// the following block is analagous to ng-repeat
window.TodosView = Backbone.View.extend({
  initialize: function() {
    // a bunch of event listeners on the model
    this.collection.on('add', this.addOne, this);
    this.collection.on('reset', this.addAll, this);
    this.collection.on('destroy', this.render, this);
  },
  addOne: function(todoItem) {
    var todoView = new TodoView({
      model: todoItem
    });
    this.$el.append(todoView.render().el);
  },
  addAll: function() {
    this.$el.empty();
    this.collection.forEach(this.addOne, this);
  },
  // it is good practice to split actions like addOne and addAll, and use them inside render action
  render: function() {
    this.addAll();
    return this;
  },
  filterCompleted: function() {
    this.collection.filterCompleted();
    this.render();
  }
});
