import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(express.json({ limit: "10000mb" }));

app.use(cors());

app.all(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});