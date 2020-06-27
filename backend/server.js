const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_LOCAL;
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongo connected");
});

const exerciseRouter = require("./routes/exercise");
const userRouter = require("./routes/user");

app.use("/exercises", exerciseRouter);
app.use("/users", userRouter);

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port: ${port}`);
});
