require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const homePage = require("./routers/homePage");

const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/homepage", homePage);

app.use((err, req, res, next) => {
  err.status = err.status || 200;
  res.status(err.status).json({
    cons: false,
    msg: err.message,
  });
});

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
