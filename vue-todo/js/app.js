var app = new Vue({
  el: "#app",
  data: {
    newTask: '',
    todos: [
      { val: "great first todo", completed: false },
      { val: "great second todo", completed: false },
      { val: "great third todo", completed: true },
      { val: "great fourth todo", completed: false },
      { val: "great fifth todo", completed: true },
      { val: "great sixth todo", completed: false }
    ]
  },
  methods: {
    addNew: function(newTask) {
      this.$data.todos.unshift({ val: this.$data.newTask });
      this.$data.newTask = "";
    },
    remove: function(index) {
      this.$data.todos.$remove(index);
    },
    clearCompleted: function() {
      this.$data.todos = this.$data.todos.filter(function(el) {
        return !el.completed;
      });
    }
  }
});
