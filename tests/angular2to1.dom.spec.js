describe('Angular2To1 DOM Component', function() {
	var element, scope, iscope;

	beforeEach(module('test-app'));

	beforeEach(inject(function ($rootScope, $compile) {
		scope = $rootScope.$new();
		element = angular.element('<test-app app="testing"></test-app>');
	    $compile(element)(scope);
		scope.$digest();
		iscope = element.isolateScope();
	}));
	
	it('should create a div element', function() {
		expect(element).toBeDefined();
	});

	it('should add "app" to the scope', function() {
		expect(iscope.testApp.app).toBe('testing');
	});

	it('should render the "app" value to dom', function() {
		expect(element.html()).toContain('testing');
	});
});