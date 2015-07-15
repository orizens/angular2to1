describe('Angular2To1 Attribute Component', function() {
	var component, element, iscope;
	var html = '<div testattr></div>'

	beforeEach(module('testattr'));

	beforeEach(inject(function ($controller, $rootScope, $compile) {
		scope = $rootScope.$new();
		// ctrl = $controller("TestAttrCtrl as vm", {
		//   $scope: scope 
		// });
		element = angular.element(html);
		$compile(element)(scope);
		iscope = element.isolateScope();
	}));
	
	it('should enhance angular1 with angular Component function', function() {
		expect(angular.Component).toBeDefined();
	});

	it('should create an angular module', function() {
		expect(angular.module('testattr')).toBeDefined();
	});
	
	it('should define a private scope and vm reference', function() {
		expect(iscope.vm).toBeDefined();
	});
	
	it('should add a class to element', function() {
		expect(element.hasClass(iscope.vm.name)).toBeTruthy;
	});
	
});