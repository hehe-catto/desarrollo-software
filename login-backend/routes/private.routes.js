import { Router } from "express";
import { jwtCheck } from "../middlewares/auth.js";
import { getPrivateMessage } from "../controllers/private.controller.js";

const router = Router();

router.get("/private", jwtCheck, getPrivateMessage);

export default router;
