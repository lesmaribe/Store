'use strict';

var app = angular.module('Store', ['Store.StoreModule', 'Store.SupplierModule', 'ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/store', {templateUrl: 'views/store/stores.html', controller: 'StoreCtrl'});
	$routeProvider.when('/supplier', {templateUrl: 'views/supplier/suppliers.html', controller: 'SupplierCtrl'});
	$routeProvider.otherwise({redirectTo: '/store'});
});