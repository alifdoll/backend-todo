const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = 3030;
const app = express();

const routes = require("./routes/routes");

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost/todolist")
  .then(() => console.log("Connected to db"))
  .catch((err) => console.error(err));

app.use("/todos", routes);

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
