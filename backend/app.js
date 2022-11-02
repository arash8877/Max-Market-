const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

const productRoutes = require("./routes/product-routes");
const userRoutes = require("./routes/user-routes");

const username = "arashab";
const password = "simabina";
const cluster = "cluster0.btlvrvy";
const dbname = "myFirstDatabase";

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

// Routes which should handle requests
app.use("/products", productRoutes);
app.use("/user", userRoutes);


app.listen(8000, () => {
  console.log("Server is running at port 8000");
});

module.exports = app;

