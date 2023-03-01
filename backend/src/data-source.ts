import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "./entities/user.entity";
import { Announcement } from "./entities/announcement.entity";
import { Photo } from "./entities/photo.entity";
import { Address } from "./entities/address.entity";
import { Comment } from "./entities/comments.entity";
import { createTables1677680201754 } from "./migrations/1677680201754-createTables";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  logging: true,
  entities: [User, Announcement, Photo, Address, Comment],
  migrations: [createTables1677680201754],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source initialized");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

export default AppDataSource;
