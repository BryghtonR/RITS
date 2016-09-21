app.controller('MainController', function($scope, $routeParams){
  $scope.Menu = [{
    "sectionName":"Appetizers",
    "items":[
      {
        "name":"Calamari",
        "price": 7.95
      },{
        "name":"Blooming Onion",
        "price":5.95
      },{
        "name":"Nachos",
        "price":6.49
      },{
        "name":"Salad",
        "price":5.00
      },{
        "name":"Soup",
        "price": 5.00
      }
    ]
  },{
    "sectionName":"Entrees",
    "items":[
      "Steak",
      "Burger",
      "Chicken"
    ]},{
    "sectionName":"Sides",
    "items":[
      "French Fries",
      "Potato Chips",
      "Coleslaw",
      "Apple Sauce",
      "Side Salad"
    ]},{
    "sectionName":"Drinks",
    "items":[
      "Coke",
      "Dr. Pepper",
      "Mt Dew",
      "Bottled Water",
      "Coffee",
      "Tea"
    ]}
  ];
  $scope.sectionNum = $routeParams.sectionId;
  $scope.itemNum = $routeParams.itemId;
});
