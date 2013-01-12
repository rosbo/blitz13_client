function ArtistCtrl($scope, $routeParams) {
    $scope.fetchInfo($routeParams.id, function(item){
        $scope.item = item;
    });

    /*$scope.item = {
        "id": "011_x9",
        "name": ["Joe Hahn"],
        "origin": ["Los Angeles"],
        "genres": ["Electronica", "Rapcore"],
        "labels": ["Warner Bros. Record"],
        "group_names": ["Linkin Park", "Xero"],
        "instruments_played": ["Keyboard", "Sampler"],
        "text": "'''Joseph \"Joe\" Hahn''' (born March 15, 1977), also known by his stage name, '''Mr. Hahn''', is an American turntablist and director best known as the DJ and sampler for the American rock band Linkin Park."
    };*/
}

function AlbumCtrl($scope, $routeParams) {
    $scope.fetchInfo($routeParams.id, function(item){
        $scope.item = item;
        $scope.artists = [];

        // Fetch article
        if(item.artists) {
            for(i in item.artists){
                $scope.fetchInfo(item.artists[i], function(artist){
                    console.log(artist);
                    $scope.artists.push(item);
                });
            }
        }
    });

    /*$scope.item = {
        "id": "01hcg8p",
        "name": ["Big Pimpin"],
        "artists": ["011_x9"],
        "release_date": ["2000-09-12"],
        "labels": ["Warner Bros. Record"],
        "track_names": ["Girls Best Friend", "Big Pimpin"],
    };*/
}
