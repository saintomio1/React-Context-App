const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

const port = process.env.PORT || 4500;

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

//ROUTES
app.get("/", (req, res) => {
  res.send("This is Home Page 1");
});

// //Connect to DB
// const port = process.env.PORT || 3000;
// mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
//   console.log(`Connected to DB and Listening on port ${port}...`)
// );

// //How to start listening to the server
// app.listen(port);

//Alternative Connection Method to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("connected to DB!")
);
//How to start listening to the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
//NOTE WORTHY
//MongoDB Information for connection
//Login(Username: firstcostconcept@gmail.com; Password: Stephen2012)
//Project Name:fcc_restAPI3
//Username:fcc6
//Password:fcc_06
