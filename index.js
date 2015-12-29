// Angular2Component
// By Oren Farhi
(function(angular) {
    if (typeof module !== 'undefined' && typeof exports !== "undefined" && module.exports === exports) {
        angular = require('angular');
        if (global) {
            global.ng = angular;
        }
        module.exports = Angular2Component;
    } 

    if (!angular) {
        console.error('angular has not been loaded. make sure to include angular before angualr2to1 module.');
        return;
    }

    if (window) {
        window.ng = angular;
    }
    angular.core = Component = Angular2Component;
    angular.Component = Angular2Component;

    function Angular2Component (options) {
        var _selector = '';
        var isAttribute = false;
        var _directive = {
            bindToController: true,
            // templateUrl: '',
            // template: '',
            controller: '',
            controllerAs: '',
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
        var moduleName;

        return Component(options);

        function Component (options) {
            moduleName = getSanitizedSelector(options.selector);
            var injectors = options.providers ? options.providers : options.viewProviders ? options.viewProviders : [];
            var scopeBindings = options.bindings || {};
            var hasTemplate = options.template || options.templateUrl;
            var controllerAs = options.controllerAs ? options.controllerAs : moduleName;
            var ng1ModuleName = options.selector;
            _selector = options.selector;
            isAttribute = _selector.indexOf('[') > -1;
            if (isAttribute) {
                _directive.restrict = 'A';
                ng1ModuleName = moduleName;
            }
            if (controllerAs && controllerAs.length) {
                _directive.controllerAs = controllerAs;
            }
            if (!component[ng1ModuleName]){
                component[ng1ModuleName] = Decorator.addProviders(ng1ModuleName, injectors);
            }
            
            if (Object.keys(scopeBindings).length) {
                Decorator.addBindings(scopeBindings);
            }
            if (hasTemplate) {
                View(options);
            }
            return component;
        }

        function View (options) {
            if (options.templateUrl) {
                _directive.templateUrl = options.templateUrl;
            }

            if (options.template) {
                _directive.template = options.template;
            }
            return component;
        }

        function Class (options) {
            var ng1ModuleName = isAttribute ? moduleName : _selector;
            _directive.controller = options.constructor;

            component[ng1ModuleName]
                .directive(moduleName, directiveFn);

            return component;
        }

        function directiveFn () {
            return _directive;
        }

        function ComponentDecorator() {
            return {
                addBindings: addBindings,
                addProviders: addProviders
            };

            function addBindings (bindings) {
                angular.extend(_directive.scope, options.bindings);
                return component;
            }

            function addProviders (moduleSelectorName, injectors) {
                return angular.module(moduleSelectorName, injectors);
            }
        }
        // returns a cleaned selector after
        // stripping invalid characters for defining modules:
        // [,], - to camelCase
        function getSanitizedSelector (selector) {
            return selector
                .replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); })
                .replace(/\[|]/g, "");
        }
    };
})(angular);