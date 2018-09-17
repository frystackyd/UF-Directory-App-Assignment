/* Fill out these functions using Mongoose queries*/
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config'),
    listingsJSON = require('./listings.json');

/* Connect to your database */
mongoose.connect(config.db.uri);


var findLibraryWest = function() {
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */

   Listing.findOne({name: 'Library West'}, function(err, data){
     if(err) throw err;
     console.log(data);
   });


};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */

  // Listing.find({code : 'CABL'}, function(err, data){
    // if(err) throw err;
      Listing.findOneAndRemove({code : 'CABL'}, function(err){
        if(err) throw err;
        //console.log(data);
        console.log("delete");
   });


};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */
   Listing.findOne({name: 'Phelps Laboratory'}, function(err, data){
     if(err) throw err;
     data.address = '1953 Museum Road Gainesville, FL 32611';
     data.save(function(err){
       if(err) throw err;
       console.log(data);
     })
   });


};
var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */

   Listing.find({}, function(err, data){
     if(err) throw err;
     console.log(data);
   });


};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
