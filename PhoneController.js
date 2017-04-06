angular
  .module("phonecatApp")
  .controller("PhoneListController", function ($scope, phoneFactory) {
    $scope.phones = phoneFactory.getPhones();
    $scope.name = "world";
  });