const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const cors = require("cors");
const controller = require("./controllers/controller");
require("dotenv").config();

const app = express();

massive(process.env.CONNECTION_STRING)
  .then(
    dbInstance => app.set("db", dbInstance),
    console.log("Database Connected")
  )
  .catch(err => {
    console.log(err);
  });

app.use(json());
app.use(cors());

app.get("/api/inventory", controller.read);
app.post("/api/product", controller.addProduct);
app.delete(`/api/product/:id`, controller.deleteProduct);
app.put("/api/product/:id", controller.updateProduct);

const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
