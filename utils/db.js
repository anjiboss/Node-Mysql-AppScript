const mysql = require("mysql");

const dbCon = (cb) => {
  const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
  });
  connection.connect(function (err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }

    console.log("connected as id " + connection.threadId);
  });
  return connection;
};

module.exports = dbCon;
