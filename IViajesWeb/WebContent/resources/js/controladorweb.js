/**
 * 
 */
var portalinnova = angular.module('PortalInnova', []);

portalinnova.controller('PortalInnovaCtrl', function($scope) {

	$scope.portal = {};

	$scope.portal.redesSociales = "redes sociales facebook, dfsdfk";
	
	$scope.imagen1 = "Mancora Sensasional";
	$scope.imagen2 = "Trujillo Fantastico";
	$scope.imagen3 = "San Andres de Lujo";

});

/*portalinnova.controller('PortalInnovaCtrl', [ '$scope', '$http',
		function($scope, $http) {
			$http.get('phones/phones.json').success(function(data) {
				$scope.phones = data;
			});

			$scope.orderProp = 'age';
		}]);*/