var MongoClient=require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/mymondb",function(err,db){
 
   if(err) throw err;
   //Write databse Insert/Update/Query code here..
   const mydb = db.db('sessiondb');
    mydb.collection('Persons',function(err,collection){
    collection.insert({ id:1, firstName:'Steve', lastName:'Jobs' });
    collection.insert({ id:2, firstName:'Bill', lastName:'Gates' });
    collection.insert({ id:3, firstName:'James', lastName:'Bond' });
 
    collection.count(function(err,count){
        if(err) throw err;
        console.log('Total Rows:'+count);
    });
  });
  db.close(); //關閉連線
});