import app from "./app";
import AppDataSource from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source initialized");
    app.listen(3001, () => {
      console.log("Server running");
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

export default AppDataSource;
