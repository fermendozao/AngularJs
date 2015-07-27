	var app = angular.module("Vinco",[]);

//Creamos un nuevo controlador llamado "Blog" , Declaramos $http y $scope
		app.controller("Orbis",function($scope,$http){
//Declaramos una variable llamada post , donse se almacenaran 
			$scope.imgs = [];
//Realizamos un llamado a la API Rest JSON de Jsonplaceholder
			$http.get("http://jsonplaceholder.typicode.com/photos")
//Declaramos que si fue exitosa la accion ejecute la funcion
			.success(function(data){
				//Ejecutamos la funcion , la cual ejecutaremos en la vista para mostrar los posts.
						$scope.imgs = data;
						console.log(data);
				});
				});

//Creamos la directiva
		app.directive('vincoOrbis', function() {
			    return {
			     restrict : 'E',
			     templateUrl : './templates/template.html',
			    // templateUrl : "./templates/template.html",
			    }
			});
