const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/router");
const port = 3000;

const app = express();

mongoose.connect(
  "mongodb+srv://kareddy_29:Pavithra%4029@cluster0.rlo2kzw.mongodb.net/Login_Users",
  {
    useNewUrlParser: true,
  }
);

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

mongoose.connection
  .once("open", () => console.log("connected"))
  .on("error", (error) => {
    console.log("MongoDB Error: " + error);
  });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
