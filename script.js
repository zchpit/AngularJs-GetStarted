(function() {

  var app = angular.module("githubViewer",[]);

  var MainController = function($scope, $http) {
    
    var onUserComplete = function(response) {
      $scope.user = response.data;
    };
    var onError = function(reason) {
      $scope.error = "Could not fetch user";
    };

    $http.get("https://api.github.com/users/zchpit")
      .then(onUserComplete, onError);

    $scope.message = "Hello, Angular";

  };
  
  app.controller("MainController", MainController);
}());
