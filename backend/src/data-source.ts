import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "./entities/user.entity";
import { Announcement } from "./entities/annoucement.entity";
import { createEntities1676383002114 } from "./migrations/1676383002114-createEntities";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  logging: true,
  entities: [User, Announcement],
  migrations: [createEntities1676383002114],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source initialized");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

export default AppDataSource;
