var https = require('https');

function getAndPrintHTML (options) {

  var requestOptions = {

    host: options,
    path: options

  };


  /* Add your code here */

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {

      var newLine = "\n";

      console.log(data + newLine);

      console.log('Chunk Received. Length:', data.length);

    });

    response.on('end', function() {

      console.log('Response stream complete.');

    });

  });

}


var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };


getAndPrintHTML("www.google.com");