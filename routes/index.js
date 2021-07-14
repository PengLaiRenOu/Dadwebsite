var express = require('express');
var router = express.Router();
var session = require('express-session');
var nameData = [["0973170180","0935610561","0928386535","0982160528","0932637172","0935811973","0933398160","0923641600","0933406511","0919666902","0921769131","0980478855","0928992067","0955436528"],["陳世昌 0973170180","黃建珽 0935610561","詠薪汽車 0928386535","加百列汽車 0982160528","筌盛汽車 0932637172","久美華英汽車 0935811973","詠泉企業社 0933398160","宏昇汽車 0923641600","信安汽車 0933406511","林金柱 0919666902","權威汽車 0921769131","巨新汽車保養行 0980478855","偉 0928992067","許志鴻 0955436528"]];
var MongoClient = require('mongodb').MongoClient;
 
// Connect to the db
MongoClient.connect("mongodb://localhost:27017/mymondb", function (err, db) {
  if(err) throw err;
  //Write databse Insert/Update/Query code here..
  console.log('mongodb is running!');
  db.close(); //關閉連線
});

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
          console.log("---------------------------")
          console.log(nameData.length)
          for(let i = 0;i < nameData[0].length;i++){
            if(res.locals.username == nameData[0][i]){
              req.session.name = nameData[1][i]; 
              console.log(req.session.name);
            }
          }
          // console.log(req.session.userName);                       
          res.redirect('search');
          return;
      }    
  });             
});
module.exports = router;
