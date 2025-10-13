import dotenv from "dotenv";
import { auth } from "express-oauth2-jwt-bearer";

dotenv.config();

export const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE || "http://localhost:4000/api",
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL || "https://dev-rp0ntd71wqseo6ye.us.auth0.com/",
});
