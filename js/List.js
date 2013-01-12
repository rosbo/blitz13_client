function ListCtrl($scope) {
    $scope.items = [{
        "id": "011_x9",
        "name": "Joe Hahn",
        "origin": "Los Angeles",
        "genres": ["Electronica", "Rapcore"],
        "labels": ["Warner Bros. Record"],
        "group_names": ["Linkin Park", "Xero"],
        "instrument_played": ["Keyboard", "Sampler"],
        "text": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis."
    }];
    

    for(i=0; i<5;i++){
        $scope.items[i] = $scope.items[0];
    }

    console.log($scope.query);
}
