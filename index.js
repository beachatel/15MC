// //import fetch-node
// //import dotenv

// const Datastore = require("nedb");
// const express = require("express");
// const app = express();

// app.listen(3000, () => console.log("listening at port: 3000"));
// app.use(express.static("public"));
// app.use(express.json({ limit: "1mb" }));

// const db = new Datastore("database.db");
// db.loadDatabase();


// //create a get route 

// app.post("/api", (request, response) => {
//   const data = request.body;
//   const timestamp = Date.now();
//   data.timestamp = timestamp;
//   db.insert(data);
//   response.json(data);
// });

// //create get route to weather apis