var mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: "localhost", 
  user: "root", 
  password: "root",
  database: "agenda"
});

module.exports={
    getConnection: function(){
      return new Promise(function(resolve,reject){
        pool.getConnection().then(function(connection){
          resolve(connection);
        }).catch(function(error){
          reject(error);
        });
      });
    }
  } 
