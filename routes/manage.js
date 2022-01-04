var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.userName == undefined){
    res.redirect('/');
  }else{
    require('../model/checkAuth.js');
    getAuthByUsername(req.session.userName, function (err, results){
      if(results[0]["authority"] == 3){
        res.render('manage');
      }else{
        res.redirect('search');
      }
    });
  }
});
router.post('/', function(req, res){
  
});
module.exports = router;
