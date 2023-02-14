import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { errorMiddleware } from "./middlewares/error.middleware";

import loginRoutes from "./routes/login.routes";

const app = express();
app.use(express.json());

app.use("/login", loginRoutes);

app.use(errorMiddleware);

app.listen(3000, () => {
  console.log("Server running");
});
