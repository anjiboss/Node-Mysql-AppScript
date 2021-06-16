const dbConn = require("./db");


const addUser = (user) => {
  const connection = dbConn();
  const sql = `INSERT INTO loginUser (username, content) VALUES ("${user.username}", "${user.content}")`
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
  connection.end();
}
module.exports=addUser;
