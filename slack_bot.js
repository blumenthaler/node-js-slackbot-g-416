"use strict";

const rp = require('request-promise');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const TOKEN = 'VtNwBXkpgP66IxaBbmQNNbCv';

const validateToken = token => {
  return TOKEN == token
}

// Just an example request to get you started..
app.get('/', (req,res) => {
  res.send('ok');
});



app.post('/', (req, res) => {
  if (!validateToken(req.body.token)) {
    res.status(400).send();
    return;
  }

})

// This code "exports" a function 'listen` that can be used to start
// our server on the specified port.
exports.listen = function(port, callback) {
  callback = (typeof callback != 'undefined') ? callback : () => {
    console.log('Listening on ' + port + '...');
  };
  app.listen(port, callback);
};
