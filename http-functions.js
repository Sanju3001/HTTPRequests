
module.exports = function getHTML (someURL, someFunction) {
    /* Your code here */

    var https = require('https');

    var myURL = {

    host: someURL.host,
    path: someURL.path

  };

  https.get(myURL, function (response) {

    var newLine = "";

    response.setEncoding('utf8');

    response.on('data', function (data) {

      newLine += data;

      someFunction(newLine);

      //print_uppercase(newLine);

      //print_lowercase(newLine);

      //print_reverse(newLine);

      //console.log('Chunk Received. Length:', data.length);

    });

    response.on('end', function() {

      console.log('Response stream complete.');


    });

  });

};