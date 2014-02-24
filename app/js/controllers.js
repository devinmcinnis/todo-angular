'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('Todo', ['$scope', 'Todos', function($scope, Todos) {
    // Data-binding to a Service
    // http://stsc3000.github.io/blog/2013/10/26/a-tale-of-frankenstein-and-binding-to-service-values-in-angular-dot-js/
    $scope.todos = Todos.collection;

    $scope.$watch(function () {
      return Todos.collection;
    }, function (newVal) {
      $scope.todos = newVal;
    });

    this.complete = function (todo) {
      // Toggle 'completeness' of todo item
      todo.complete = (todo.complete === true) ? false : true;
    }

    return this;

  }])
