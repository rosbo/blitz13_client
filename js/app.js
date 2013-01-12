'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.directives', 'myApp.filters']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/list.html', controller: ListCtrl});
        $routeProvider.when('/detail/:id', {templateUrl: 'partials/detail.html', controller: DetailCtrl})
        $routeProvider.otherwise({redirectTo: '/'});
    }])
    .config(function($httpProvider) {
        delete $httpProvider.defaults.headers.common['X-Requested-With'];   
    })
    .run(function($rootScope, $location) {
        $rootScope.location = $location;
    });
