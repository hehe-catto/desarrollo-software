import { Router } from "express";
import { getPublicMessage } from "../controllers/public.controller.js";

const router = Router();

router.get("/public", getPublicMessage);

export default router;
