var express = require('express');
var router = express.Router();
var session = require('express-session');


router.get('/', function(req, res, next) {
  if(req.session.userName == undefined){
    res.redirect('/');
  }else{
    res.render('obd2', { title: 'Express' });
  }
});
router.post('/', function(req, res) {
  require('../model/searchSdb.js');
  getObd(req.body.obd,function (err, results) {                           
    if(results == '') {
        return;
    }else {
        res.send(results);
        return;
    }
  });

});
module.exports = router;
