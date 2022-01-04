var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'data'
});
//透過帳號取得使用者資料
getUserByUserName = function getUserByUserName(username,password, callback) {
    let cmd = "select ac,pw,name,authority from custom where ac='"+ username +"' and pw=PASSWORD('"+password+"');";
    // console.log(cmd);
    connection.query(cmd, function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        // console.log("test");
        //connection.release();
        callback(err,result);                    
    });       
};

showAllUser = function showAllUser(callback){
    let cmd = "select ac,name,authority from custom where 1;";
    connection.query(cmd, function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        callback(err,result);                    
    });
};