var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session.name);
  if(req.session.userName == undefined){
    res.redirect('/');
  }else{
    res.render('newSearch', {name: req.session.name});
  }
});
router.post('/', function(req, res){
  
});
module.exports = router;
