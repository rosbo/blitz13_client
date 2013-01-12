'use strict';

function MainCtrl($scope, $http) {
    $scope.fetchError = false;
    $scope.restUrl = "http://54.235.223.169";
    $scope.imageUrl = "http://ec2-23-20-80-89.compute-1.amazonaws.com:8080/BlitzDataWebService/images/";
    $scope.selectedFacets = {};
    
    mockData($scope);
    initTeamData($scope);

    $scope.fetch = function() {    
        var params = {q: $scope.query};

        for(var selectedFacet in $scope.selectedFacets) {
            if($scope.selectedFacets[selectedFacet] && $scope.selectedFacets[selectedFacet].length > 0) {
                params[selectedFacet] = $scope.selectedFacets[selectedFacet].join(" OR ");
            }
        }

        console.log(params);

        $http({
            method: 'GET',         
            url: $scope.restUrl,
            params: params
        }).success(function(data, status, headers, config) {
            $scope.fetchError = false;
            // TODO: Penser aux updates de facets sélectées
            // TODO: plug data
        }).error(function(data, status, headers, config) {           
            $scope.fetchError = true;
            $scope.items = [];
            $scope.facets = {};            
            $scope.selectedFacets = {};
        });
    }

    $scope.selectFacet = function(name, value) {
        var values = $scope.selectedFacets[name];

        if(!values){
            values = [];
        }

        var index = values.indexOf(value);
        
        if(index == -1){
            values.push(value);
        } else{
            values.splice(index, 1);
        }

        $scope.selectedFacets[name] = values;
        $scope.fetch();
    }

    $scope.getFacetName = function(name) {
        var prettyNames = {
            "origin": "Origine",
            "type": "Type",
            "genres": "Genres",
            "name": "Nom",
            "labels": "Labels",
            "group_names": "Nom du groupe",
            "instrument_played": ""
        };

        return (prettyNames[name]) ? prettyNames[name] : name;
    };    
}

function mockData($scope) {
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

    $scope.items = [{
        "id": "011_x9",
        "name": "Joe Hahn Halendro Helfote",
        "origin": "Los Angeles",
        "genres": ["Electronica", "Rapcore"],
        "labels": ["Warner Bros. Record"],
        "group_names": ["Linkin Park", "Xero"],
        "instrument_played": ["Keyboard", "Sampler"],
        "text": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis."
    }];

    for(var i=0; i<9;i++){
        $scope.items[i] = $scope.items[0];
    }
}

function initTeamData($scope) {
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
}
