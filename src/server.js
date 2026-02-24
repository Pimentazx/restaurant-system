import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes.js";
import { connectMongo } from "./config/mongo.js";

dotenv.config();

const app = express();
const PORT = 3000; 

app.use(cors());
app.use(express.json());

connectMongo();

app.use(routes);

app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});