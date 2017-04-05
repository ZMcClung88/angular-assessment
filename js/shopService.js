angular.module('assessment').service('shopService', function($http) {

    var URL = 'http://practiceapi.devmounta.in/products'

    this.getProducts = function() {
      return $http ({
        method: 'GET',
        url: URL,
    });
  }

})
