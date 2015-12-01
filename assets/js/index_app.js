(function(){
  //module
  var app = angular.module('indexApp', []);

    app.directive('signIn', function(){
      return {
        restrict: 'E',
        templateUrl: '../html/templates/sign-in.html',
        controller: function($scope){
          $scope.username = '';
          $scope.password = '';
          $scope.register = function(){

          };
        }
      };
    })

    app.directive('logIn', function(){
      return {
        restrict: 'E',
        templateUrl: '../html/templates/log-in.html',
        controller: function($scope){
          $scope.username = '';
          $scope.password = '';
          $scope.tryAccess = function(){

          };
        }
      };
    })

    app.directive('recentUpdates', function(){
      return {
        restrict: 'E',
        templateUrl: '../html/templates/recent-updates.html',
        controller: function($scope){
          $scope.updates = [];

        }
      };
    })
  //controller

  //JS object

})();
