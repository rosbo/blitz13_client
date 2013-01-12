function ListCtrl($rootScope, $scope) {
    $scope.search = function(){
        $rootScope.q = $scope.query;
        $rootScope.fetch();
    }        
}
