'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('Todo', ['$scope', 'Todos', function($scope, Todos) {
    // Data-binding to a Service
    // http://stsc3000.github.io/blog/2013/10/26/a-tale-of-frankenstein-and-binding-to-service-values-in-angular-dot-js/
    $scope.$watch(function () {
      return Todos.collection;
    }, function (newVal, oldVal) {
      $scope.todos = newVal;

      // Filter to display how many tasks are left to complete
      var items = newVal.filter(function(todo) {
        if (!todo.complete) {
          return todo;
        }
      });

      $scope.activeTodos = items.length;

    // Adding "true" as third parameter tells Angular to watch for deep-object changes
    }, true);

    this.complete = function (todo) {
      // Toggle 'completeness' of todo item
      todo.complete = (todo.complete === true) ? false : true;
    };

    this.addTask = function (todo) {
      Todos.addTask(todo, function () {
        $scope.newTask = '';
      });
    };

    this.deleteTask = function (todo) {
      Todos.deleteTask(todo);
    };

    this.clearCompleted = function () {
      Todos.clearCompleted($scope.todos);
    };

    this.setFilter = function (query) {
      $scope.footerFilter = { complete: query };
    };

    return this;

  }]);
