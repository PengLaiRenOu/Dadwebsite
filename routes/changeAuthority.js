var express = require('express');
var router = express.Router();
var session = require('express-session');

router.post('/', function(req, res) {
  require('../model/user.js');
  let mysql      = require('mysql');
  let connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : '',
      database : 'data'
  });
  let cmd = "UPDATE `custom` SET `authority` = " + req.body.authority + " WHERE `name` = '" + req.body.id + "';";
    connection.query(cmd, function (err) {
        if (err) {
            console.log(err);
            return;
        }
    });
});
module.exports = router;
