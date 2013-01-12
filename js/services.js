'use strict';

angular.module('myApp.services', ['ngResource']).
    factory('Test', function($resource) {
        return $resource('http://54.235.223.169', {}, {
            query: {method: 'GET'}
        })
    });
