'use strict';

function MainCtrl($rootScope, $scope, $http) {
    $scope.fetchError = false;
    $scope.restUrl = "http://ec2-23-22-13-188.compute-1.amazonaws.com/Search";
    $scope.imageUrl = "http://ec2-23-20-80-89.compute-1.amazonaws.com:8080/BlitzDataWebService/images/";
    $scope.selectedFacets = {};
    
    mockData($scope);
    initTeamData($scope);

    for (var item in $scope.items){
        $scope.items[item]['text'] = $scope.processWikiText($scope.items[item]['text']);
    }

    $rootScope.fetch = function() {   
        var params = {q: $rootScope.q};

        for(var selectedFacet in $scope.selectedFacets) {
            if($scope.selectedFacets[selectedFacet] && $scope.selectedFacets[selectedFacet].length > 0) {
                params[selectedFacet] = $scope.selectedFacets[selectedFacet].join(" OR ");
            }
        }

        $http({
            method: 'GET',         
            url: $scope.restUrl,
            params: params
        }).success(function(data, status, headers, config) {
            $scope.fetchError = false;         
            console.log(data);


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
        $rootScope.fetch();
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

    $scope.processWikiText = function(text) {
        // Blod + italic
        var pattern = /'''''.+'''''/gi;
        var matches = text.match(pattern);
        for(var match in matches) {
            text = text.replace(matches[match], "<strong><i>" + matches[match].replace(/'/g, "") + "</i></strong>");
        }
        // Bold
        pattern = /'''.+'''/gi;
        matches = text.match(pattern);
        for(var match in matches) {
            text = text.replace(matches[match], "<strong>" + matches[match].replace(/'/g, "") + "</strong>");
        }
        // Italic
        pattern = /''.+''/gi;
        matches = text.match(pattern);
        for(var match in matches) {
            text = text.replace(matches[match], "<i>" + matches[match].replace(/'/g, "") + "</i>");
        }

        return text;
    }  
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

    /*$scope.items = [{
        "id": "011_x9",
        "name": ["Joe Hahn Halendro Helfote"],
        "type": ["artists"],
        "origin": "Los Angeles",
        "genres": ["Electronica", "Rapcore"],
        "labels": ["Warner Bros. Record"],
        "group_names": ["Linkin Park", "Xero"],
        "instruments_played": ["Keyboard", "Sampler"],
        "text": "'''''Joseph \"Joe\" Hahn''''' (born March 15, 1977), also known by his ''stage'' '''name''', '''Mr. Hahn''', is an American turntablist and director best known as the DJ and sampler for the American rock band Linkin Park."
    }];

    for(var i=0; i<9;i++){
        $scope.items[i] = $scope.items[0];
    }*/
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
