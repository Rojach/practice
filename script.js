var routing=angular.module('Routing',['ngRoute']);
routing.config(function($routeProvider){
	$routeProvider.when('/home',{
		templateUrl:'home.html',
		controller:'homeController'
	
	}).when('/books2',{
      templateUrl: 'books2.html',
      controller:'books2Controller'
	}).when('/search',{
      templateUrl: 'search.html',
      controller:'searchController'

  }).when('/about',{
      templateUrl: 'about.html',
      controller:'aboutController'
})
	.otherwise({
		redirectTo: '/home'

});
  });


routing.controller('homeController',function($scope){
	$scope.message="Welcome to Angular books online store";
});
routing.controller('books2Controller',function($scope){
         $scope.books2=[{name:"angular js",author:"Roja",price:100},{name:"node js",author:"chandana",price:90},{name:"backbone js",author:"anita",price:100}];
});
routing.controller('searchController',function($scope){
         $scope.search=[{name:"angular js",author:"Roja",price:100},{name:"node js",author:"chandana",price:90},{name:"backbone js",author:"anita",price:100}];
      
});
routing.controller('aboutController',function($scope){
         $scope.about="End of page";
});