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
  console.log(req.session.userName);
  if(req.session.userName == undefined){
    res.redirect('/');
  }else{
    let tmp = "https://www.obd-data.com/gb/"+ req.body.search +".html";
    res.redirect(tmp);
  }
      

});
module.exports = router;
