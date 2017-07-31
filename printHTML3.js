var https = require('https');

function getHTML (requestOptions, printHTML) {

  /* Add your code here */

  var myURL = {

    host: requestOptions.host,
    path: requestOptions.path

  };

  https.get(myURL, function (response) {

    var newLine = "";

    response.setEncoding('utf8');

    response.on('data', function (data) {

      newLine += data;

      printHTML(newLine);

      //console.log('Chunk Received. Length:', data.length);

    });

    response.on('end', function() {

      console.log('Response stream complete.');


    });

  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
};


getHTML(requestOptions, printHTML);

