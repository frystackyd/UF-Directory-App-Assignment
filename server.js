var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);

  /*
    Your request handler should send listingData in the JSON format if a GET request
    is sent to the '/listings' path. Otherwise, it should send a 404 error.

    HINT: explore the request object and its properties
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
   */

   // we need to find out what this is...
   //console.log("hello world");

   if (request.url == '/listings') {
     fs.readFile("listings.json", function(err, data) {
       //response.writeHead(200, {'Content-Type': 'text/html'});
       //response.write(request.url);
       response.write(data);
       response.end();
     });
   } else {
     response.writeHead(404);
     response.write('Bad gateway error');
     response.end();
   }

   //fs.readFile("listings.json", function(err, data) {
     ////response.writeHead(200, {'Content-Type': 'text/html'});
     ////response.write(request.url);
     //response.write(data);
     //response.end();
   //});

};

fs.readFile('listings.json', 'utf8', function(err, data) {
  /*
    This callback function should save the data in the listingData variable,
    then start the server.
   */
});

var server = http.createServer(requestHandler);

server.listen(port, function() {
  console.log("listening...");
});
