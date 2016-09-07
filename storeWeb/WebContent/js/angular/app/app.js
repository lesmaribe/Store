'use strict';

var app = angular.module('Store', ['Store.StoreModule', 'ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/store', {templateUrl: 'views/store/stores.html', controller: 'StoreCtrl'});
	$routeProvider.otherwise({redirectTo: '/store'});
});