import express from "express";
import corsMiddleware from "./config/cors.js";
import apiRoutes from "./routes/index.js";

const app = express();

app.use(corsMiddleware);
app.use(express.json());

app.use("/api", apiRoutes);

app.get("/authorized", (req, res) => {
  res.send("Secured Resource");
});

export default app;
