const express = require("express");
const mongoose = require("mongoose");
const app = express();

const username = "arashab";
const password = "simabina";
const cluster = "cluster0.btlvrvy";
const dbname = "myFirstDatabase";

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log(`
  ✅ Database connected successfully ✅
  `);
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  next()
})

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //These two lines allow us to parse the body of an HTTP request and parse a JSON payload

const productRoutes = require("./routes/product-routes");
const userRoutes = require("./routes/user-routes");

// Routes which should handle requests
app.use("/", productRoutes);
app.use("/", userRoutes);

app.listen(8000, () => {
  console.log("Server is running at port 8000");
});

module.exports = app;
