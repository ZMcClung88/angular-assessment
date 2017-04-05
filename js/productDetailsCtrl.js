angular.module('assessment').controller('productDetailsCtrl', function($scope, shopService, $stateParams) {

  var products = shopService.getProducts;

  for(var i =0; i < products.length; i++) {
    if(products[i].id === parseInt($stateParams.id)) {
      $scope.singleProduct = products[i];
    }
    return $http.get('http://practiceapi.devmounta.in/products/' + singleProduct.id);
  }


})
