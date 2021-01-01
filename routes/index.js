var express = require('express');
var router = express.Router();
var session = require('express-session');
// var MongoClient = require('mongodb').MongoClient;
 
// // Connect to the db
// MongoClient.connect("mongodb://localhost:27017/mymondb", function (err, db) {
//   if(err) throw err;
//   //Write databse Insert/Update/Query code here..
//   console.log('mongodb is running!');
//   db.close(); //關閉連線
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  // var mysql      = require('mysql');
  // var connection = mysql.createConnection({
  //   host     : 'localhost',
  //   user     : 'root',
  //   password : '',
  //   database : 'data'
  // });
  require('../model/session.js');
  
  if(req.session.userName == undefined){
    res.render('index', { title: 'Express' });
  }else{
    res.redirect('search');
  }
});
router.post('/', function(req, res) {
  var userName = req.body['inputAccount'],
      userPwd = req.body['inputPassword'];
  require('../model/user.js');
  getUserByUserName(userName,userPwd, function (err, results) {                           
      if(results == '') {
          res.locals.error = '使用者帳號或密碼錯誤';
          res.render('index',{title:'登入失敗'});
          return;
      }else {
          res.locals.username = userName;
          //設定session
          req.session.userName = res.locals.username; 
          // console.log(req.session.userName);                       
          res.redirect('search');
          return;
      }    
  });             
});
module.exports = router;
