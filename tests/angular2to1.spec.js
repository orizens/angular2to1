describe('Angular2To1 Element Component', function() {
	var component, ctrl, TestAppCtrl, Tests;

	beforeEach(module('test-app'));

	beforeEach(inject(function ($controller, $rootScope, _Tests_) {
		Tests = _Tests_;
		scope = $rootScope.$new();
		scope.app = "ng2to1";
		ctrl = $controller("TestAppCtrl as vm", {
		  $scope: scope 
		});
	}));
	
	it('should enhance angular1 with angular Component function', function() {
		expect(angular.Component).toBeDefined();
	});

	it('should create an angular module', function() {
		expect(angular.module('test-app')).toBeDefined();
	});
	
	it('should define run the controller if defined as a string', function() {
		expect(scope.vm.name).toMatch(ctrl.name);
	});
	
	it('should inject the services & modules from "bindings"', function() {
		expect(scope.vm.items).toBe(Tests.items);
	});
});