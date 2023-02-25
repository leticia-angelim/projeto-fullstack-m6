import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "./entities/user.entity";
import { Announcement } from "./entities/announcement.entity";
import { Photo } from "./entities/photo.entity";
import { createEntities1677337343000 } from "./migrations/1677337343000-createEntities";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  logging: true,
  entities: [User, Announcement, Photo],
  migrations: [createEntities1677337343000],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source initialized");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

export default AppDataSource;
