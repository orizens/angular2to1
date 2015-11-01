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

        var Decorator = ComponentDecorator();

        return Component(options);

        function Component (options) {
            var injectors = options.providers ? options.providers : options.viewProviders ? options.viewProviders : [];
            var scopeBindings = options.bindings || {};
            var moduleName = options.selector;
            _selector = moduleName;
            isAttribute = _selector.indexOf('[') > -1;
            if (isAttribute) {
                _directive.restrict = 'A';
                moduleName = getSanitizedSelector();
            }
            if (!component[_selector]){
                component[_selector] = Decorator.addProviders(moduleName, injectors);
            }
            
            if (Object.keys(scopeBindings).length) {
                Decorator.addBindings(scopeBindings);
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
            if (options.bindings) {
                angular.extend(_directive.scope, options.bindings);
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

        function ComponentDecorator() {
            return {
                addBindings: addBindings,
                addProviders: addProviders
            };

            function addBindings (bindings) {
                angular.extend(_directive.scope, options.bindings);
                return component;
            }

            function addProviders (moduleName, injectors) {
                return angular.module(moduleName, injectors);
            }
        }
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