function MainController ($scope){
 $scope.hello = 'hello';
}
angular.module('app').controller('MainController', ['$scope', MainController]);
