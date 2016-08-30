angular.module('alurapic')
	.controller('FotosController', function ($scope, $http) {

		$scope.fotos = [
			
			{
				titulo: 'Leão',
				url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
			},

			{
				titulo: 'Leão2',
				url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
			},

			{
				titulo: 'Leão3',
				url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
			}
		];

		var promisse = $http.get('/v1/fotos');

		promisse.then(function (retorno) {

			$scope.fotos = retorno.data;

		}).catch(function (erro) {

			console.log(erro);
			
		});

	});