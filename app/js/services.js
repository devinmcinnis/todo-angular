'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  factory('Todos', function () {
    this.collection = [{
      title: 'Learn AngularJS',
      completed: false
    }];

    return this;
  });
