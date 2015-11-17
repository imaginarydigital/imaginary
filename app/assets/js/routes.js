// Route configurations
angular.module('app').config(['$routeProvider', function ($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'partials/home.html',
    controller: 'MainController'
  })
  .when('/about', {
    templateUrl: 'partials/about.html',
    controller: 'MainController'
  })
  .when('/contact', {
    templateUrl: 'partials/contact.html',
    controller: 'MainController'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);