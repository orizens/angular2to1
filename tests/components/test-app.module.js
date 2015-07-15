(function() {
    'use strict';

    angular
        .Component({
            selector: 'test-app',
            appInjector: [
                
            ]
        })
        .View({
            template: '<div> {{ vm.name }} </div>'
        })
        .Class({
            constructor: 'TestAppCtrl'
        })

    angular
    	.module('test-app')
    	.controller('TestAppCtrl', TestAppCtrl);

    function TestAppCtrl () {
    	var vm = this;
    	vm.name = 'angular2To1';
    }
})();