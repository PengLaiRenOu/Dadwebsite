var express = require('express');
var router = express.Router();
router.post('/', function(req, res){
    let brand = req.body.brand;
    let type = req.body.type;
    let displacement = req.body.displacement;
    let year = req.body.year;
    let which = req.body.which;
    let metch = "";
    let metched = false;
    require('../model/searchDB.js');
    if(which == "picture"){
        // console.log("test....")
        fill(brand,type,displacement,year,function (err, results) {
            if(results != '') {
                // console.log(results);
                res.send(results);
            }else {
                res.send("error")
            }    
        });
    }
    else if(which == "brand"){
        if(type == "-1" & displacement == "-1" & year == "-1"){
            metch = "1";
        }else{
            if(type != "-1"){
                if(metched){
                    metch = metch + " and type ='"+ type +"'";
                }else{
                    metch = "type ='"+ type +"'";
                    metched = true;
                }
            }
            if(displacement != "-1"){
                if(metched){
                    metch = metch + " and displacement ='"+ displacement +"'";
                }else{
                    metch = "displacement ='"+ displacement +"'";
                    metched = true;
                }
            }
            if(year != "-1"){
                if(metched){
                    metch = metch + " and year ='"+ year +"'";
                }else{
                    metch = "year ='"+ year +"'";
                    metched = true;
                }
            }
        }
        search("brand",metch,function (err, results) {
            if(results != '') {
                res.send(results);
            }else {
                res.send("error")
            }    
        });
    }
    else if(which == "type"){
        if(brand == "-1" & displacement == "-1" & year == "-1"){
            metch = "1";
        }else{
            if(brand != "-1"){
                if(metched){
                    metch = metch + " and brand ='"+ brand +"'";
                }else{
                    metch = "brand ='"+ brand +"'";
                    metched = true;
                }
            }
            if(displacement != "-1"){
                if(metched){
                    metch = metch + " and displacement ='"+ displacement +"'";
                }else{
                    metch = "displacement ='"+ displacement +"'";
                    metched = true;
                }
            }
            if(year != "-1"){
                if(metched){
                    metch = metch + " and year ='"+ year +"'";
                }else{
                    metch = "year ='"+ year +"'";
                    metched = true;
                }
            }
        }
        search("type",metch,function (err, results) {
            if(results != '') {
                res.send(results);
            }else {
                res.send("error")
            }    
        });
    }
    else if(which == "displacement"){
        if(type == "-1" & brand == "-1" & year == "-1"){
            metch = "1";
        }else{
            if(type != "-1"){
                if(metched){
                    metch = metch + " and type ='"+ type +"'";
                }else{
                    metch = "type ='"+ type +"'";
                    metched = true;
                }
            }
            if(brand != "-1"){
                if(metched){
                    metch = metch + " and brand ='"+ brand +"'";
                }else{
                    metch = "brand ='"+ brand +"'";
                    metched = true;
                }
            }
            if(year != "-1"){
                if(metched){
                    metch = metch + " and year ='"+ year +"'";
                }else{
                    metch = "year ='"+ year +"'";
                    metched = true;
                }
            }
        }
        search("displacement",metch,function (err, results) {
            if(results != '') {
                res.send(results);
            }else {
                res.send("error")
            }    
        });
    }
    else if(which == "year"){
        if(type == "-1" & displacement == "-1" & brand == "-1"){
            metch = "1";
        }else{
            if(type != "-1"){
                if(metched){
                    metch = metch + " and type ='"+ type +"'";
                }else{
                    metch = "type ='"+ type +"'";
                    metched = true;
                }
            }
            if(displacement != "-1"){
                if(metched){
                    metch = metch + " and displacement ='"+ displacement +"'";
                }else{
                    metch = "displacement ='"+ displacement +"'";
                    metched = true;
                }
            }
            if(brand != "-1"){
                if(metched){
                    metch = metch + " and brand ='"+ brand +"'";
                }else{
                    metch = "brand ='"+ brand +"'";
                    metched = true;
                }
            }
        }
        search("year",metch,function (err, results) {
            if(results != '') {
                res.send(results);
            }else {
                res.send("error")
            }    
        });
    }
    
});
module.exports = router;