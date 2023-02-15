import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { errorMiddleware } from "./middlewares/error.middleware";
import announcementRoutes from "./routes/announcement.routes";

import loginRoutes from "./routes/login.routes";
import userRoutes from "./routes/user.routes";

const app = express();
app.use(express.json());

app.use("/announcement", announcementRoutes);

app.use("/login", loginRoutes);
app.use("/users", userRoutes);

app.use(errorMiddleware);

app.listen(3000, () => {
  console.log("Server running");
});
