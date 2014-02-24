'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  factory('Todos', function () {
    this.collection = [{
      title: 'Learn AngularJS',
      complete: false
    }];

    this.addTask = function (todo, cb) {
      var newTodo = {
        title: todo,
        complete: false
      };

      this.collection.push(newTodo);

      cb(todo);
    };

    return this;
  });
