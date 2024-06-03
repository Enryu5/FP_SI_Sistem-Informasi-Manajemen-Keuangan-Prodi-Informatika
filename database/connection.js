var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: 3307
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  con.end((error) => {
    if (error) {
        console.error('Error closing MySQL connection:', error);
        return;
    };
    
    console.log('MySQL connection closed.');  
  });
});
