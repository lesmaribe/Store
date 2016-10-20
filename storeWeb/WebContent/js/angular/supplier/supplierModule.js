'use strict';

var supplierModule = angular.module('Store.SupplierModule', []);

supplierModule.controller('SupplierCtrl', ['$scope', 'orderByFilter', function($scope, orderBy){
	var suppliers = [{"id":"1", "code":"100", "name":"HP", "full_address":"supplier adress1", "notes":"HP supplies electronic devices"},
	                 {"id":"2", "code":"101", "name":"OfficeFurn", "full_address":"supplier adress2", "notes":"OfficeFurn supplies office furnitures"},
	                 {"id":"3", "code":"102", "name":"Logitech", "full_address":"supplier adress3", "notes":"Logitech supplies electronic devices"},
	                 {"id":"4", "code":"103", "name":"CapeSta", "full_address":"supplier adress4", "notes":"CapeSta supplies stationaries"}
	                 ];
	
	$scope.propertyName = 'code';
	$scope.reverse = false;
	$scope.suppliers = orderBy(suppliers, $scope.propertyName, $scope.reverse);
	
	$scope.editSupplier = function(supplier){
		$scope.toEditSupplier = {
				"code": supplier.code, "name": supplier.name, "full_address": supplier.full_address, "notes": supplier.notes
		};
	}
	
	$scope.saveSupplier = function(toEditSupplier){
		console.log(toEditSupplier);
		$scope.toEditSupplier = {};
	}
	
	
}]);