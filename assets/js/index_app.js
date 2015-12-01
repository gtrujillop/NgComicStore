(function(){
  //module
  var app = angular.module('indexApp', []);

    app.directive('signIn', function(){
      return {
        restrict: 'E',
        templateUrl: '../html/templates/sign-in.html',
        controller: function(){
          this.username = '';
          this.password = '';
          this.email = '';
          this.firstName = '';
          this.lastName = '';
          this.id = 0;
          console.log(this.username);
          this.addUser = function(){
            var users = JSON.parse(localStorage['users']);
            var id = this.generateId();
            var newUser = { id: id,
                            username: this.username,
                            password: this.password,
                            email: this.email,
                            firstName: this.firstName,
                            lastName: this.lastName
                          };
            users.push(newUser);
            localStorage['users'] = JSON.stringify(users);
          };
          this.generateId = function(){
            this.id = this.id ++;
            return this.id;
          };
        },
        controllerAs: 'signIn'
      };
    })

    app.directive('logIn', function(){
      return {
        restrict: 'E',
        templateUrl: '../html/templates/log-in.html',
        controller: function(){
          this.username = '';
          this.password = '';
          this.tryAccess = function(){

          };
        },
        controllerAs: 'logIn'
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
