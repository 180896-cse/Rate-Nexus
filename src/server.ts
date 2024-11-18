//Main File for the App
import express, { Express } from "express";

const app: Express = express();
const port: number | String = process.env.PORT || 3000;

console.log(`Server Starting!!`);

app.listen(port, () => {
  console.log(`Server is live over http://localhost:${port}`);
});
