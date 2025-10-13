import { Router } from "express";
import publicRoutes from "./public.routes.js";
import privateRoutes from "./private.routes.js";

const router = Router();

router.use(publicRoutes);
router.use(privateRoutes);

export default router;
