require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors")

//Utils
const dbCon = require("./utils/db");
const addUser = require("./utils/addUser");

//Middleware
app.use(express.json())
app.use(cors())


app.get("/api/user", (req, res) => {
  const connection = dbCon(() => console.log("DB Connected"));
  connection.query(
    "SELECT * FROM loginUser",
    function (error, results, fields) {
      if (error) throw error;
      const arrResults = []	    
      for (let i = 0; i < results.length; i++){
			  arrResults.push([results[i].id, results[i].username, results[i].content])
      }
			console.log("returned");
      res.json(arrResults);
    }
  );
  connection.end();
});

app.post("/api/add", (req,res) => {
	addUser(req.body);
	res.sendStatus(200)
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
