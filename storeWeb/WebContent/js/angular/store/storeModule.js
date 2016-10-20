'use strict';

var storeModule = angular.module('Store.StoreModule', []);

storeModule.factory('storeFactory', ['$http', function($http){
	
	var urlBase = 'http://localhost:8080/storeWeb-1.0.1/rest/company';
	var storeFactory = {};
	
	storeFactory.getStores = function(){
		return $http.get(urlBase + '/' + 'companies');
	};
	
	storeFactory.getStore = function(code){
		return $http.get(urlBase + '/' + code);
	};
	
	return storeFactory;
}]);


storeModule.controller('StoreCtrl', ['$scope', 'orderByFilter', 'storeFactory', function($scope, orderBy, storeFactory){
	var stores; /*= [{"id":1, "code":"5266","name":"OpenCollab", "parent_code":null},
	                 {"id":2, "code":"5267","name":"NWU", "parent_code":null},
	                 {"id":3, "code":"5268","name":"QMuzik", "parent_code":null},
	                 {"id":4, "code":"5269","name":"OC_A", "parent_code":"5266"},
	                 {"id":5, "code":"5270","name":"OC_B", "parent_code":"5266"},
	                 {"id":6, "code":"5271","name":"NWU_A", "parent_code":"5267"}
	                 ]*/;
	getStores();
	
	function getStores(){
		storeFactory.getStores()
			.then(function (response){
				console.log(response.data);
				stores = response.data;
			}, function (error){
				console.log(error.message);
			});
	};
	
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
		
		/* this doesn't work with json hash map*/
		/*for(var delstore of $scope.stores){
			if(delstore.parent_code == null)
				continue;
			if(store.code === delstore.parent_code){
				hasPar = true
				break;
			}
		}*/
		
		/* will activate once I add parent_code to json hash map returned by store rest service*/
		/*for(var key in $scope.stores){
			if($scope.stores[key].parent_code == null)
				continue;
			if(store.code == $scope.stores[key].parent_code){
				hasPar = true
				break;
			}
		}*/
		
		if(hasPar == true){
			alert('you can not kill a parent, store ' + store.code);
		}else{
			if(confirm('Are you sure you want to delete store ' + store.code + ' ?') == true){
				console.log('deleted ' + store.code);
				for(var key in $scope.stores){
					if(key == store.code)
						delete $scope.stores[key];
				}
				console.log('remaining stores........');
				console.log($scope.stores);
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