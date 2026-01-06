import express from "express";
import { PORT } from "./config/env.js";
import connectDB from "./db/mongoDB.js";
import authRouter from "./routes/auth.routes.js";

const app = express();

app.use(express.json());

// Define routes here (e.g., auth routes)
app.use("/api/v1/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
