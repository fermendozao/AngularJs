
//Start app in angular js

  var app = angular.module("app",[]);

    app.controller("vinco",function($scope,$http){

      $scope.post = [];
      $http.get("http://jsonplaceholder.typicode.com/photos")

      .success(function(data){
            $scope.post = data;
            console.log(data);

        });
    });

      app.directive("oneVinco",function(){
        return {
          restrict : "E",
          template : "{{name}}",
        }
    });

      app.directive("twoVinco",function(){
        return {
          restrict : "C",
          template : '<h4>Angularjs</h4>'
                      +'<p>Angular is an framework JavaScript develope for google , this framework help developement web sites fast and easy .</p>',
        }
    });

      app.directive("vincoJson",function(){
        return {
          restrict : "E",
          templateUrl : '../../template.html',
        }
    });


