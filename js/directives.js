'use strict';

angular.module('myApp.directives', [])
    .directive('onKeyUp', function() {
        return function(scope, elm, attrs) {
            elm.bind("keyup", function() {
                scope.$apply(attrs.onKeyup);
            });
        };
    })
    .directive('showonhoverparent', function() {
      return {
        link : function(scope, element, attrs) {
            var topDefault = $(element).find(".slide").position().top;
            var slide = $(element).find(".slide");
            element.bind('mouseenter', function() {
                var shift = $(element).find("p").innerHeight();
                slide.stop(true, true).animate({
                    top: (topDefault - shift) + "px"
                }, 250);
            });
            element.stop(true, true).bind('mouseleave', function() {
                slide.animate({
                    top: topDefault + "px"
                }, 250);
            });
            }
        }
    });
