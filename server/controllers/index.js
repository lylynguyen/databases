
var models = require('../models');
// var express = require('express');
// var app = express.createServer();
// app.use(express.bodyParser());


module.exports = {
  messages: {
    get: function (req, res) {
    }, // a function which handles a get request for all messages
    post: function (req, res) {

      var params = [req.body.message, req.body.username, req.body.roomname];
      console.log('params: ',params);
      models.messages.post(params,function(err, results){
        if (err) {
          res.sendStatus(500);
        } else {
          res.status(201).json(req.body);
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

