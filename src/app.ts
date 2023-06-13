import express from "express";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "./swagger/swagger.json";
import ServerlessHttp from "serverless-http";
const app = express();
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.use("/.netlify/functions/app", router);
// ServerlessHttp(app);
app.listen(80, () => {
  console.log("Server berjalan di port 3000");
});
