// Angular2Component
// By Oren Farhi
if (typeof module !== 'undefined' && typeof exports !== "undefined" && module.exports === exports) {
    var angular = require('angular');
    module.exports = Angular2Component;
}
(function() {
    'use strict';
    angular.Component = Angular2Component;

    function Angular2Component (options) {
    	var _selector = '';

    	var _directive = {
            bindToController: true,
			// templateUrl: '',
			// template: '',
		    controller: '',
		    controllerAs: 'vm',
		    restrict: 'E'
		    // replace: true
    	};

   		var component = {
   			View: View,
   			Class: Class
   		};

   		return Component(options);

    	function Component (options) {
    		var injectors = options.appInjector || [];
    		_selector = options.selector;
    		if (!component[_selector]){
    			component[_selector] = angular.module(_selector, injectors);
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
    		var angular1Selector = _selector.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
    		_directive.controller = options.constructor;

    		component[_selector]
    			.directive(angular1Selector, directiveFn);

    		return component;
    	};

    	function directiveFn () {
    		return _directive;
    	};
    };
})();