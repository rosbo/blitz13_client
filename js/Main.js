'use strict';

function MainCtrl($scope) {
    $scope.restUrl = "http://54.235.223.169";
    $scope.facets = [];

    $scope.team = [
    {
        'name': 'Vincent Roseberry',
        'url': 'http://www.vroseberry.com'
    },{
        'name': 'Sylvain Perron',
        'url': 'http://www.vroseberry.com'
    },{
        'name': 'Simon-Pierre Gingras',
        'url': 'http://www.vroseberry.com'
    },{
        'name': 'Francis Valois',
        'url': 'http://www.vroseberry.com'
    }];

    $scope.getFacetName = function(name) {
        var prettyNames = {
            "origin": "Origine",
            "type": "Type",
            "genres": "Genres",
        };

        return (prettyNames[name]) ? prettyNames[name] : name;
    };

    $scope.facets = {
        "origin": {
            "Georgia": 1,
            "White Plains": 1
        },
        "type": {
            "albums": 32,
            "artists": 19
        },
        "genres": {
            "Alternative rock": 2,
            "Pop rock": 1,
            "Indie rock": 1
        }
    };
}
