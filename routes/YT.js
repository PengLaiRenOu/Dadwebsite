var express = require('express');
var router = express.Router();
var session = require('express-session');


router.get('/', function(req, res, next) {
  console.log(req.session.userName);
  if(req.session.userName == undefined){
    res.redirect('/');
  }else{
    res.render('YT', { title: 'Express' });
  }
});
router.post('/', function(req, res) {
  var userName = "a";
      

});
module.exports = router;
