const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const mongodb = require("mongodb");
// const seed = require("./seeders/seed");
// const api = require("./routes/api");

const app = express();
const PORT = process.env.PORT || 3001;

// const Workouts = require("./models/workouts.js");

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true , useFindAndModify: false });

// app.use(require("./routes/api.js"));
// app.use(require("./routes/views.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
