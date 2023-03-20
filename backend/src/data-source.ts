import "dotenv/config";
import path from "path";
import { DataSource, DataSourceOptions } from "typeorm";
import { User } from "./entities/user.entity";
import { Announcement } from "./entities/announcement.entity";
import { Photo } from "./entities/photo.entity";
import { Address } from "./entities/address.entity";
import { Comment } from "./entities/comments.entity";
import { createEntities1677766971545 } from "./migrations/1677766971545-createEntities";

const dataSourceConfig = (): DataSourceOptions => {
  const nodeEnv: string | undefined = process.env.NODE_ENV;

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [User, Address, Announcement, Photo, Comment],
    };
  }

  const dbUrl: string | undefined = process.env.DATABASE_URL;

  if (!dbUrl) {
    throw new Error("Env var DATABASE_URL does not exists");
  }

  return {
    type: "postgres",
    url: dbUrl,
    synchronize: false,
    logging: true,
    entities: [User, Address, Announcement, Photo, Comment],
    migrations: [createEntities1677766971545],
  };
};

const AppDataSource = new DataSource(dataSourceConfig());

export default AppDataSource;
