
//透過帳號取得使用者資料
search = function search(find,metch,callback) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'data'
    });
    var cmd = `select ${find} from newdata where ${metch} GROUP BY ${find};`;
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

fill = function fill(brand,type,displacement,year,callback) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'data'
    });
    var cmd = `select page , book , extend from newdata where brand = "${brand}" and displacement = "${displacement}" and type = "${type}" and year = "${year}";`
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
getObd = function getObd(obd,callback) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'data'
    });
    var cmd = "select * from obd where mal like '"+ obd +"%'";
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