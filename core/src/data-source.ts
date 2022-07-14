import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "ec2-34-242-84-130.eu-west-1.compute.amazonaws.com",
  port: 5432,
  username: "qnvhywpfazsbze",
  password: "72b93f0273eb2affdb53a8e9576bd40244b82136f2e02c9a451aac8fc112f8e5",
  database: "d34le7sj0d8sbn",
  synchronize: true,
  logging: false,
  entities: ["src/entity/**/*.ts", "./entity/**/*.js"],
  migrations: [],
  subscribers: [],
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});
