require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const homePage = require("./routers/homePage");
const socialsRouter = require("./routers/socials");
const skillsCatRouter = require("./routers/skillsCat");
const skillsRouter = require("./routers/skills");

const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(fileUpload());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/homepage", homePage);
app.use("/api/socials", socialsRouter);
app.use("/api/skillsCat", skillsCatRouter);
app.use("/api/skills", skillsRouter);

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
