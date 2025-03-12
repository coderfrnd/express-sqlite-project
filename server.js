import express from "express";
import { router } from "./app/routes/tutorial.route.js";

const app = express();
const port = 3000;
app.use(express.json());
app.use("/api/tutorial", router);
app.listen(port, () => {
  console.log("port is running on 3000");
});
