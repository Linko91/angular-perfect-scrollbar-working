(function() {
    'use strict';

    angular
        .module('perfect_scrollbar', [])
        .provider('perfectScrollbarConfig', perfectScrollbarConfigProvider)
        .directive('perfectScrollbar', perfectScrollbarDirective);

    function perfectScrollbarConfigProvider() {
        // Default configuration
        var defaultConfiguration = {
            wheelSpeed            : 1,
            wheelPropagation      : false,
            swipePropagation      : true,
            minScrollbarLength    : null,
            maxScrollbarLength    : null,
            useBothWheelAxes      : false,
            useKeyboard           : true,
            suppressScrollX       : false,
            suppressScrollY       : false,
            scrollXMarginOffset   : 0,
            scrollYMarginOffset   : 0,
            stopPropagationOnClick: true
        };

        this.config = function(configuration) {
            defaultConfiguration = angular.extend({}, defaultConfiguration, configuration);
        }

        this.$get = function() {
            return {
                getConfig: function() {
                    return defaultConfiguration;
                }
            };
        };
    }

    function perfectScrollbarDirective($timeout, perfectScrollbarConfig) {
        return {
            restrict: 'EA',
            compile : function(tElement) {
                tElement.addClass('perfect-scrollbar');

                return function postLink(scope, iElement, iAttrs) {
                    var options = {};

                    if (iAttrs.perfectScrollbar) {
                        options = scope.$eval(iAttrs.perfectScrollbar);
                    }

                    options = angular.extend({}, perfectScrollbarConfig.getConfig(), options);

                    // Initialize the scrollbar
                    $timeout(function () {
                        PerfectScrollbar.initialize(iElement[0], options);
                    }, 0);

                    iElement.on('mouseenter', updateScrollbar);

                    scope.$watch(function() {return iElement.prop('scrollHeight');}, function (current, old) {
                        if (angular.isUndefined(current) || angular.equals(current, old)) {
                            return;
                        }
                        updateScrollbar();
                    });

                    scope.$watch(function() {return iElement.prop('scrollWidth');}, function (current, old) {
                        if (angular.isUndefined(current) || angular.equals(current, old)) {
                            return;
                        }
                        updateScrollbar();
                    });

                    function updateScrollbar() {
                        PerfectScrollbar.update(iElement[0]);
                    }

                    // Cleanup on destroy
                    scope.$on('$destroy', function() {
                        iElement.off('mouseenter');
                        PerfectScrollbar.destroy(iElement[0]);
                    });
                };
            }
        };
    }
})();