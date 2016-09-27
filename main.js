var app = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);

app.config(function($routeProvider){
  $routeProvider
  .when("/home", {
    controller: "FirstCtrl",
    templateUrl: "views/home.html"
  }).when("/path/:groupId", {
    controller: "FirstCtrl",
    templateUrl: "views/group.html"
  }).when("/path/:groupId/:itemId", {
    controller: "FirstCtrl",
    templateUrl: "views/item.html"
  }).when("/checkOut",{
    controller: "FirstCtrl",
    templateUrl: "views/checkOut.html"
  }).otherwise({
    redirectTo: "/home"
  });
});

app.factory('data', function(){
  return {
    total:0,
    purchases:[],
    menu: [{
      groupName: "Apps",
      items:[
        {itemName:"Calamari",
        itemInfo:"adsf",
        itemPrice: 6.00},
        {itemName:"Nachos",
        itemInfo:"adsf",
        itemPrice: 5.00},
        {itemName:"House Salad",
        itemInfo:"adsf",
        itemPrice: 4.50}
      ]},{
      groupName: "Entrees",
      items:[
        {itemName:"Steak",
        itemInfo:"adsf",
        itemPrice: 12.00},
        {itemName:"Burger",
        itemInfo:"adsf",
        itemPrice: 7.00},
        {itemName:"Pasta",
        itemInfo:"adsf",
        itemPrice: 6.00}
      ]},{
      groupName: "Sides",
      items:[
        {itemName:"French Fries",
        itemInfo:"adsf",
        itemPrice: 2.00},
        {itemName: "Side Salad",
        itemInfo:"adsf",
        itemPrice: 2.00},
        {itemName:"Coleslaw",
        itemInfo:"adsf",
        itemPrice: 1.50},
        {itemName:"Applesauce",
        itemInfo:"adsf",
        itemPrice: 1.50}
      ]},{
      groupName: "Drinks",
      items:[
        {itemName:"Soda",
        itemInfo:"adsf",
        itemPrice: 2.00},
        {itemName:"Beer",
        itemInfo:"adsf",
        itemPrice: 3.00},
        {itemName:"Wine",
        itemInfo:"adsf",
        itemPrice: 5.00}
      ]}
    ]};
});

app.controller('FirstCtrl', function($scope, data, $routeParams){
  // service connection
  $scope.data = data;
  // routeParam connections
  $scope.groupId = $routeParams.groupId;
  $scope.itemId = $routeParams.itemId;
  // receipt functions
  $scope.addValue = function(){
    //items purchased list
    data.purchases.push({itemName: data.menu[$scope.groupId].items[$scope.itemId].itemName, itemPrice: data.menu[$scope.groupId].items[$scope.itemId].itemPrice});
    //find total
    data.total = 0;
    for(n=0;n<data.purchases.length;n++){
      data.total += data.purchases[n].itemPrice;
    }
  };
  $scope.print = function(){
    console.log("yes");
  };
});
