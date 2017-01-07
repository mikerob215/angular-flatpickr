var Flatpickr = require('flatpickr');

angular.module('angular-flatpickr', [])
    .directive('ngFlatpickr', [function() {
    return {
        require: 'ngModel',
        restrict : 'A',
        scope : {
            fpOpts : '&',
            fpOnSetup : '&'
        },
        link : function(scope, element, attrs, ngModel) {

            var vp = new Flatpickr(element[0], scope.fpOpts());

            if (scope.fpOnSetup) {
                scope.fpOnSetup({
                    fpItem : vp
                });
            }
            element.on('click', function (e) {
                scope.$apply(function() {
                    ngModel.$setViewValue(vp.selectedDateObj);
                });
            });
        }
    };
}]);
