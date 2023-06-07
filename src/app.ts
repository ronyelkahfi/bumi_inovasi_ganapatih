import express from "express";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "./swagger/swagger.json";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(3000, () => {
  console.log("Server berjalan di port 3000");
});
