require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const dbCon = require("./utils/db");

app.get("/api/user", (req, res) => {
  const connection = dbCon(() => console.log("DB Connected"));
  connection.query(
    "SELECT * FROM loginUser",
    function (error, results, fields) {
      if (error) throw error;
      console.log(typeof results);
      res.json(results);
    }
  );
  connection.end();
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
