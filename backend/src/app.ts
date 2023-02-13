import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World",
  });
});

app.use(errorMiddleware);

app.listen(3000, () => {
  console.log("Server running");
});
