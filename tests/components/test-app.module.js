(function() {

    angular
        .Component({
            selector: 'test-app',
            bindings: [
                'tests'
            ]
        })
        .View({
            template: '<div> {{ vm.name }} </div>'
        })
        .Class({
            constructor: 'TestAppCtrl'
        });

    angular
    	.module('test-app')
    	.controller('TestAppCtrl', TestAppCtrl)

    function TestAppCtrl (Tests) {
        var vm = this;
        vm.name = 'angular2To1';
        vm.items = Tests.items;
    }

    angular
        .module('tests', [])
        .factory('Tests', Tests);

    function Tests () {
        var items = ['test1', 'test2'];
        var service = {
            items: items
        };

        return service;
    }
})();