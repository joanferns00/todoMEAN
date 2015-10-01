
app.controller("todoController", function ($scope, todoService) {

$scope.formData = {};

//get

$scope.todos = todoService.get();


//create

 $scope.createTodo = function(){
$scope.todos = todoService.create($scope.formData);
console.log($scope.todos);
$scope.formData = {}; // clear the form so our user is ready to enter another
 };

 $scope.deleteTodo = function(id){
  $scope.todos = todoService.delete(id);
$scope.formData = {}; // clear the form so our user is ready to enter another  

 };

//deleting data
 // $scope.todos = data;                

});

