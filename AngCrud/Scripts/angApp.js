var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
    $scope.firstName = 'Sooraj';
    $scope.lastName = 'Singh';

    $scope.fullName = function () {
        return $scope.firstName + ' ' + $scope.lastName;
    }
});

app.controller('namesCtrl', function ($scope, $http) {
    $scope.names = [
        { name: 'Jani', country: 'Norway' },
        { name: 'Hege', country: 'Sweden' },
        { name: 'Kai', country: 'Denmark' }
    ];


    $http.get("http://www.w3schools.com/angular/customers.php")
    .success(function (response) { alert('succes' + response); $scope.names = response.records; }).
    error(function (response) { alert('error'+response); });


    $http.get("http://localhost:3463/api/Customers")
.success(function (response) {
    alert('succes');
    $scope.customer = response;
}).
error(function (response) { alert('error' + response); });
        
    //$http.get({
    //    url: 'http://www.w3schools.com/angular/customers.php',
    //    method: "GET",
    //    dataType: JSON
        
    //})
    //    .success(function (data, status, headers, config) {
    //    // this callback will be called asynchronously
    //    // when the response is available
    //        $scope.customer = data.CompanyName;

    //    }).error(function (data, status, headers, config) {
    //      // called asynchronously if an error occurs
    //        // or server returns response with an error status.
    //        alert(data+','+status);
    //    });


});