angular.module('StupidDirectives', [])
  .directive('completeColor', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        // be carefull with $watch because it can be quite expensive
        // it runs the function any time the attr.completeColor changes its value
        scope.$watch(attrs.completeColor, function (value) {
          element.css('color', (value ? 'yellow' : 'limegreen'));
        });
      }
    };
  });