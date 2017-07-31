var https = require('https');

function getAndPrintHTML (options) {

  var requestOptions = {

    host: options.host,
    path: options.path

  };


  /* Add your code here */

  https.get(requestOptions, function (response) {

    var newLine = "";

    response.setEncoding('utf8');

    response.on('data', function (data) {

      newLine += data;

      //console.log(newLine);

      console.log('Chunk Received. Length:', data.length);

    });

    response.on('end', function() {

      console.log(newLine);

    });

  });

}


var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };


getAndPrintHTML(requestOptions);