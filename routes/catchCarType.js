var express = require('express');
var router = express.Router();
router.post('/', function(req, res){
  require('../model/searchSdb.js');
//   console.log(req.body.brand);
  
  getCarType(req.body.brand,function (err, results) {                           
    if(results == '') {
        return;
    }else {
        // console.log("search")
        // console.log(results)
        res.send(results);
        return;
    }    
});
});
module.exports = router;