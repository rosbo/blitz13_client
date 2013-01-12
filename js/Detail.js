function DetailCtrl($scope, $routeParams) {
    // TODO : Call server
    // $routeParams.id

    $scope.item = {
        "id": "011_x9",
        "name": "Joe Hahn",
        "origin": "Los Angeles",
        "genres": ["Electronica", "Rapcore"],
        "labels": ["Warner Bros. Record"],
        "group_names": ["Linkin Park", "Xero"],
        "instrument_played": ["Keyboard", "Sampler"],
        "text": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis."
    };
}
