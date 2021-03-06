var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
    var queryString = 'SELECT * from messages';  
    db.dbConnection.query(queryString, function(err, results){
      if (err){
        throw err;
      } else {
        callback(results);
      }
    });

    }, // a function which produces all the messages
    post: function (params, callback) {
      // receiving a post from the server
      //var params = [req.body.message, req.body.username, req.body.roomname];
      var queryString = 'INSERT INTO messages (message, roomname, user, createAt) VALUES ("blah", (select id from roomnames), (select id from users), null)';
      db.dbConnection.query(queryString, function(err,results){
        if (err) {
          throw err
        }else {
          callback(err, results);
        }
      });

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};




