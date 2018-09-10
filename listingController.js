angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.jumbotronlisting = {
      "code":"",
      "name":"",
      "coordinates":{
        "latitude":"",
        "longitude":""
      },
      "address":""
    };
    $scope.filteredListings = $scope.listings;

    document.getElementById("jumbotronDisplay").style.display = "none";

    // $scope.searchText was created as a model in our HTML search input bar

    $scope.applyFilter = function() {
      if ($scope.searchText.length == 0) {
        $scope.filteredListings = $scope.listings;
      } else {
        var matchOrNot = false;
        $scope.filteredListings = [];
        for (x = 0; x < $scope.listings.length; x++) {
          if ($scope.listings[x].name.toUpperCase().includes($scope.searchText.toUpperCase())) {
            matchOrNot = true;
          }
          if ($scope.listings[x].code.toUpperCase().includes($scope.searchText.toUpperCase())) {
            matchOrNot = true;
          }
          if (matchOrNot) {
            $scope.filteredListings.push($scope.listings[x]);
          }
          matchOrNot = false;
        } // end for loop
      } // end else block
    } // end function

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {};
    $scope.deleteListing = function(index) {};
    $scope.showDetails = function(index) {
      document.getElementById("jumbotronDisplay").style.display = "initial";
      $scope.jumbotronlisting = $scope.filteredListings[index];
    };
  }
]);
