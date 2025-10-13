import cors from "cors";

export const corsOptions = {
  origin: process.env.CLIENT_ORIGIN || "http://localhost:3000",
  methods: ["GET", "POST"],
  allowedHeaders: ["Authorization", "Content-Type"],
};

export default cors(corsOptions);
