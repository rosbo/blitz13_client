angular.module('myApp.filters', [])
.filter('firstCap', function() {
    return function(input){
        if(input && input.length > 0){
            return input.charAt(0).toUpperCase() + input.slice(1);
        }

        return input;
    }
});
