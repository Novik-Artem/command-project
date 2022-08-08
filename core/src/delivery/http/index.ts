import express from "express";
import routerCharacters from "./characters";
import routerQuotes from "./quotes";

const app: express.Application = express();

app.use(express.json());
app.use("/api", routerCharacters);
app.use("/api", routerQuotes);
export default app;