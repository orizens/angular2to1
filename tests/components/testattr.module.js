(function() {
    'use strict';

    angular
        .Component({
            selector: '[testattr]'
        })
        .Class({
            constructor: 'TestAttrCtrl'
        })

    angular
    	.module('testattr')
    	.controller('TestAttrCtrl', TestAttrCtrl);

    function TestAttrCtrl ($element) {
    	var vm = this;
    	vm.name = 'angular2To1';

        activate();

        function activate () {
            $element.addClass(vm.name);
        }
    }
})();