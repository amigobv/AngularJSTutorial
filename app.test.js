describe("PhoneListController", function() {

  beforeEach(module("phonecatApp"));

  it("should create a 'phones' model with 3 phone", inject(function($controller) {
    var scope = {};
    var ctrl = $controller("PhoneListController", {$scope: scope});

    expect(scope.phones.length).toBe(3);
    expect(scope.name).toBe("world");

  }));
})