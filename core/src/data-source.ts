import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "ec2-3-248-121-12.eu-west-1.compute.amazonaws.com",
  port: 5432,
  username: "nlwrgjduuyeqoh",
  password: "3c18ccdc0f541c686b349af22f20666a46661cfe68b8b31c9af11b0c917ddf91",
  database: "d3elu7eehlugsg",
  synchronize: true,
  logging: true,
  entities: ["src/entity/**/*.ts", "./entity/**/*.js"],
  migrations: [],
  subscribers: [],
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});
