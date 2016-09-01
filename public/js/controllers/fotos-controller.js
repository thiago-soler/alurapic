angular.module('alurapic')
	.controller('FotosController', function ($scope, $http) {

		$scope.fotos = [];
		$scope.filtro = '';

		var promisse = $http.get('/v1/fotos');

		promisse.success(function (fotos) {

			$scope.fotos = fotos;

		}).error(function (error) {

			console.log(error);
			
		});

	});