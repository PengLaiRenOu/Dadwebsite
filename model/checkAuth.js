
//透過帳號取得使用者資料
getAuthByUsername = function getAuthByUsername(username, callback) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'data'
    });
    var cmd = "select ac,pw,name,authority from custom where name='"+ username +"'";
    connection.query(cmd, function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        callback(err,result);
    });       
 };
