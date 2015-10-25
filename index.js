// Angular2Component
// By Oren Farhi
(function(angular) {
    if (typeof module !== 'undefined' && typeof exports !== "undefined" && module.exports === exports) {
        angular = require('angular');
        module.exports = Angular2Component;
    } 

    if (!angular) {
        console.error('angular has not been loaded. make sure to include angular before angualr2to1 module.');
        return;
    }

    angular.Component = Angular2Component;

    function Angular2Component (options) {
        var _selector = '';
        var isAttribute = false;
        var _directive = {
            bindToController: true,
            // templateUrl: '',
            // template: '',
            controller: '',
            controllerAs: 'vm',
            restrict: 'E',
            scope: {}
            // replace: true
        };

        var component = {
            View: View,
            Class: Class,
            _directive: _directive
        };

        return Component(options);

        function Component (options) {
            var injectors = options.bindings || [];
            var moduleName = options.selector;
            _selector = moduleName;
            isAttribute = _selector.indexOf('[') > -1;
            if (isAttribute) {
                _directive.restrict = 'A';
                moduleName = getSanitizedSelector();
            }
            if (!component[_selector]){
                component[_selector] = angular.module(moduleName, injectors);
            }
            
            return component;
        };

        function View (options) {
            if (options.templateUrl) {
                _directive.templateUrl = options.templateUrl;
            }

            if (options.template) {
                _directive.template = options.template;
            }
            return component;
        };

        function Class (options) {
            var angular1Selector = getSanitizedSelector();
            _directive.controller = options.constructor;

            component[_selector]
                .directive(angular1Selector, directiveFn);

            return component;
        };

        function directiveFn () {
            return _directive;
        };

        // returns a cleaned selector after
        // stripping invalid characters for defining modules:
        // [,], - to camelCase
        function getSanitizedSelector () {
            return _selector
                .replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); })
                .replace(/\[|]/g, "");
        }
    };
})(angular);