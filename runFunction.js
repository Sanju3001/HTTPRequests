
var getHTML = require('./http-functions');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
};

function printHTML (getHTML) {
  console.log(getHTML);
}

getHTML(requestOptions, printHTML);