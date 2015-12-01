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
          $scope.email = '';
          $scope.firstName = '';
          $scope.lastName = '';
          $scope.id = 0;
          $scope.addUser = function(){
            var users = JSON.parse(LocalStorage['users']);
            var id = generateId();
            var newUser = { id: id,
                            username: username,
                            password: password,
                            email: email,
                            firstName: firstName,
                            lastName: lastName
                          };
            users.push(newUser);
            LocalStorage['users'] = users.stringify();
          };
          $scope.genereateId = function(){
            $scope.id = $scope.id ++;
            return $scope.id;
          }
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
