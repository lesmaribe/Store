'use strict';

var storeModule = angular.module('Store.StoreModule', []);

storeModule.controller('StoreCtrl', ['$scope', 'orderByFilter', function($scope, orderBy){
	var stores = [{"id":1, "code":"5266","name":"OpenCollab", "parent_code":null},
	                 {"id":2, "code":"5267","name":"NWU", "parent_code":null},
	                 {"id":3, "code":"5268","name":"QMuzik", "parent_code":null},
	                 {"id":4, "code":"5269","name":"OC_A", "parent_code":"5266"},
	                 {"id":5, "code":"5270","name":"OC_B", "parent_code":"5266"},
	                 {"id":6, "code":"5271","name":"NWU_A", "parent_code":"5267"}
	                 ];
	
	$scope.propertyName = 'code';
	$scope.reverse = false;
	$scope.stores = orderBy(stores, $scope.propertyName, $scope.reverse);
	
	$scope.sortStore = function(property){
		$scope.reverse = (property !== null && $scope.propertyName === property) ? !$scope.reverse : false;
		$scope.propertyName = property;
		$scope.stores = orderBy(stores, $scope.propertyName, $scope.reverse);
	};
	
	$scope.editstore = function(store){
		$scope.editedStore = {
				"id":store.id, "code":store.code, "name":store.name
		};
	};
	
	$scope.deletestore = function(store, index){
		var hasPar = false;
		/* if a store has a child store then restrict user from deleting a store*/
		for(var delstore of $scope.stores){
			if(delstore.parent_code == null)
				continue;
			if(store.code === delstore.parent_code){
				hasPar = true
				break;
			}
		}
		
		if(hasPar == true){
			alert('you can not kill a parent, store ' + store.code);
		}else{
			if(confirm('Are you sure you want to delete store ' + store.code + ' ?') == true){
				console.log('deleted ' + store.code);
				$scope.stores.splice(index, 1);
			}
		}
	};
	
	$scope.savestore = function(editedStore){
		console.log(editedStore);
		$scope.editedStore = {};
	};
	
	$scope.saveNewStore = function(name){
		var newStore = {"id":"3", "code":"5268", "name": name};
		$scope.stores.push(newStore);
		name = null;
		
		console.log(newStore);
	}
	
}]);