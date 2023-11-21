import express from "express";
const router= express.Router();

import { getMyProfile,  login, register, logout} from "../controllers/user.js";
import {isAuthenticated} from "../midddlewares/auth.js";



router.post("/new",register);

router.post("/login",login);

router.get("/logout",logout);

router.get("/me", isAuthenticated, getMyProfile);

export default router;