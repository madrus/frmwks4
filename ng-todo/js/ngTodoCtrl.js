 ngTodo.controller('NgTodoCtrl', function NgTodoCtrl($scope) {
	$scope.todos = [
		{ val: "Complete the 'Choosing a JavaScript Framework' course", completed: false },
		{ val: "Learn AngularJS", completed: true },
		{ val: "Learn BackboneJS", completed: false },
		{ val: "Learn ReactJS", completed: false },
		{ val: "Learn EmberJS", completed: false },
		{ val: "Build an MVC SPA", completed: true }
	];

    $scope.addNewTask = function() {
        $scope.todos.unshift({ val: $scope.newTask, completed: false });
        $scope.newTask = '';
    };

    $scope.clearCompleted = function() {
        $scope.todos = $scope.todos.filter(function(el, index){
            return !el.completed;
        });
    };

    $scope.removeTodo = function(index) {
        $scope.todos.splice(index, 1);
    };
});