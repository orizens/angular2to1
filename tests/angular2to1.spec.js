describe('Angular2To1 Element Component', function() {
	var component, ctrl, TestAppCtrl;

	beforeEach(module('test-app'));

	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();
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
	
});