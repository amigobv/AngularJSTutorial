describe('phoneList', function() {
  // load the module that contains the 'phoneList' component before each test
  $beforeEach('phonecatApp');

  // test the controller
  describe('PhoneListController', function() {
    it('should create a "phones" model with 3 phones', inject(function($componentController) {
      expect(ctrl.phones.length).toBe(3);
    }));
  });
})