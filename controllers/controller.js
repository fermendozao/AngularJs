

	var app = angular.module("Vinco",[]);

	app.directive("vincoOrbis", function(){
		 return {
//Declaramos que sera un elemento 		 	
		      restrict: 'E',
//Contenido de la directiva
		  	  template : "<h1>Hey Listo!!</h1>"
		    }
			});


		app.directive("vincoDirective", function(){
		 return {
//Declaramos que sera un elemento 		 	
		      restrict: 'C',
//Contenido de la directiva
		  	  template : "<h1>{{test}}</h1>"
		    }
			});

		app.directive("vincotemplate", function(){
		 return {
//Declaramos que sera un elemento 		 	
		      restrict: 'E',
//Contenido de la directiva
		  	  template : "<h1>{{test}}</h1>"
		    }
			});

	app.controller("Orbis",function($scope){

		$scope.test = "test";

	});