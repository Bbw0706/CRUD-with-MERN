const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/api")

mongoose.connect("mongodb://bee:bee@ds014648.mlab.com:14648/crud")
mongoose.Promise = global.Promise;

const app = express();

app.use(bodyParser.json())

app.use("/api", routes)

const port = 5000;

app.listen(process.env.PORT || port, () => console.log(`Listen to port of ${port}`))