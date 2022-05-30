const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'cowlist',
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

// Your Database Queries Here!!

const getCow = function (callback){

  var queryStr = 'SELECT * FROM cow';

  connection.query( queryStr,function (err, results) {

    if(err){
      console.log('err inside database getcow')
      callback (err,null)
    } else{
      callback (null, results)
    }
  })
}

  const addCow = function (cowdata,callback){
    console.log('cowdata'+cowdata.description)
    var queryStr = 'insert into cow (name, description) Values(?,?)';
    var param = [cowdata.name,cowdata.description]

    connection.query(queryStr,param, function (err, data) {

      if(err){
        console.log('err inside database addcow')
        callback (err,null)
      } else{
        callback (null, data)
      }

    })

  }






// Don't forget to export your functions!
module.exports = {
  getCow,
  addCow,

};
