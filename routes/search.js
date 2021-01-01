var express = require('express');
var router = express.Router();
var session = require('express-session');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("abc");
  console.log(req.session.userName);
  if(req.session.userName == undefined){
    res.redirect('/');
  }else{
    res.render('search', { brands: '' ,carType: '',displacement:'',year:'',engine:''});
  }
});
router.post('/', function(req, res){
  
});
module.exports = router;
