import { Router } from "express";
import { SignIn } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/sign-in", SignIn);

export default authRouter;
