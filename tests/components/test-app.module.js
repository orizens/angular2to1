(function() {

    angular
        .Component({
            selector: 'test-app',
            providers: [
                'tests'
            ],
            bindings: {
                app: '@'
            }
        })
        .View({
            template: '<div> {{ testApp.name }} {{ testApp.app }}</div>'
        })
        .Class({
            constructor: 'TestAppCtrl'
        });

    angular
    	.module('test-app')
    	.controller('TestAppCtrl', TestAppCtrl);

    function TestAppCtrl (Tests) {
        this.name = 'angular2To1';
        this.items = Tests.items;
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