angular.module('minhasDiretivas')
	
	.directive('minhaFoto', function (){

		var ddo = {};

		ddo.strict = 'AE';
		
		ddo.scope = {

			url: '@',
			titulo: '@'

		};

		ddo.templateUrl = 'js/directives/minha-foto.html';

		return ddo;

	});