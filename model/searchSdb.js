
//透過帳號取得使用者資料
getBrand = function getBrand(callback) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'data'
    });
    var cmd = "select brand from data where 1 GROUP BY brand";
    // console.log(cmd);
    connection.query(cmd, function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        callback(err,result);                    
    });       
 };
getCarType = function getCarType(brand,callback) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'data'
    });
    var cmd = "select carType from data where brand ='" + brand +"' GROUP BY carType";
    // console.log(cmd);
    connection.query(cmd, function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        callback(err,result);                    
    });       
 };
getDisplacement = function getDisplacement(brand,carType,callback) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'data'
    });
    var cmd = "select displacement from data where brand = '"+ brand +"' and carType ='" + carType +"' GROUP BY displacement";
    // console.log(cmd);
    connection.query(cmd, function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        // console.log(result);
        callback(err,result);                    
    });       
 };
getYear = function getYear(brand,carType,displacement,callback) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'data'
    });
    var cmd = "select year from data where brand = '" + brand + "'and displacement ='" + displacement +"' and cartype = '"+ carType+"' GROUP BY year";
    // console.log(cmd);
    connection.query(cmd, function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        // console.log(result);
        callback(err,result);                    
    });       
 };
fillList = function fillList(brand,carType,displacement,year,callback) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'data'
    });
    var cmd = "select * from data where brand = '" + brand + "'and displacement ='" + displacement +"' and cartype = '"+ carType+"' and year = '" + year + "'";
    // console.log(cmd);
    connection.query(cmd, function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        // console.log(result);
        callback(err,result);                    
    });       
 };