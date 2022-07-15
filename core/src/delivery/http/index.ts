import express from "express";
import routerCharacters from "./characters";

const app: express.Application = express();
app.use(express.json());

app.use("/api", routerCharacters);

export default app;