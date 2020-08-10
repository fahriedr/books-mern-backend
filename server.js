const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const booksRoute = require("./routes/books");
require("dotenv/config");

app.use(bodyParser.json());
//Routes
app.use("/books", booksRoute);

const port = process.env.PORT;
const uri = process.env.DB;
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("Connect to MongoDB")
);

app.listen(port, console.log(`Listening to port ${port}`));
