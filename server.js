import express from "express";
import { router } from "./app/routes/tutorial.route.js";
import { config } from "dotenv";

config();
const port = process.env.PORT || 3000;
console.log("Loaded Environment Variables:", process.env.PORT);

const app = express();

app.use(express.json());
app.use("/api/tutorial", router);
app.listen(port, () => {
  console.log("port is running on", port);
});
