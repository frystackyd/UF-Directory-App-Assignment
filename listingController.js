angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.searchText = "";
    document.getElementById("jumbotronDisplay").style.display = "none";
    $scope.jumbotronlisting = {
      "code":"",
      "name":"",
      "coordinates":{
        "latitude":"",
        "longitude":""
      },
      "address":""
    };
    $scope.jumbotronlistingdefault = {
      "code":"",
      "name":"",
      "coordinates":{
        "latitude":"",
        "longitude":""
      },
      "address":""
    };
    $scope.filteredListings = $scope.listings;

    //

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
        } // end for loop /t3&ab..dfa4
      } // end else block
    } // end function

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {};
    $scope.deleteListing = function(index) {
      try {
        if ($scope.listings[index] == $scope.jumbotronlisting) {
          $scope.jumbotronlisting = $scope.jumbotronlistingdefault;
          document.getElementById("jumbotronDisplay").style.display = "none";
        }
        editedArrayOfListings = [];
        for (i = 0; i < $scope.listings.length; i++) {
          if (i != index) {
            editedArrayOfListings.push($scope.listings[i]);
          }
        }
        $scope.listings = editedArrayOfListings;
        $scope.applyFilter();
      } catch (err) {
        alert(err.message);
      }
    };
    $scope.showDetails = function(index) {
      document.getElementById("jumbotronDisplay").style.display = "initial";
      $scope.jumbotronlisting = $scope.filteredListings[index];
    };
  }
]);
