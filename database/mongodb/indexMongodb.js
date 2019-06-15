const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'SDC_Menu';

let _db;


MongoClient.connect(url, {useNewUrlParser: true}, function(err, client) {
  if(err) {
    console.log('Error connecting to database', err)
  } 
  console.log("Connected successfully to database");
  _db = client.db(dbName);
});

var dbHelpers = (id) => {
  return new Promise ((resolve, reject) => {
    _db.collection('menus').findOne({ id: id}, (err, items) => {
      if(err){
        reject({hello: 'hello world', ...err})
      } else{
        resolve(items)
      }
    })
  })
 }
 
 module.exports.get = dbHelpers;