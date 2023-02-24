import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { errorMiddleware } from "./middlewares/error.middleware";

import announcementRoutes from "./routes/announcement.routes";
import loginRoutes from "./routes/login.routes";
import userRoutes from "./routes/user.routes";

const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/login", loginRoutes);
app.use("/users", userRoutes);
app.use("/announcement", announcementRoutes);

app.use(errorMiddleware);

const expresss = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger/swagger_output.json");

const mainRoutes = require("./routes/announcements.routes.ts");

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", mainRoutes);

app.listen(3001, () => {
  console.log("Server running");
});
