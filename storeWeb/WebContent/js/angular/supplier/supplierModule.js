'use strict';

var supplierModule = angular.module('Store.SupplierModule', []);

supplierModule.controller('SupplierCtrl', ['$scope', 'orderByFilter', function($scope, orderBy){
	var suppliers;
	
	$scope.propertyName = 'code';
	$scope.reverse = false;
	$scope.suppliers = orderBy(suppliers, $scope.propertyName, $scope.reverse);
	
	
}]);