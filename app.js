// var numberArray=[1,2,3,4,5,6,7,8,9,10];
// console.log("Numer array :",numberArray);
//
//
//   function above5Filter(value)
//   {
//     return value>5;
//   }
//   var filteredNumberArray=numberArray.filter(above5Filter);
//   console.log("Filtered number array:",filteredNumberArray);
//
// var shoppingList=["milk","peanut","cookies","Bleand"];
//
// console.log("Shopping List :",shoppingList);
(function(){
'use strict'

  var shoppingList=["milk","peanut","peanut cookies","peanut banana","greaph"];


  angular.module('ShoppingListApp',[])
  .controller('ShopingListController',ShopingListController);
  ShopingListController.$inject=['$scope'];

    function ShopingListController($scope)

    {
      $scope.shoppingList=shoppingList;
    }
})();
