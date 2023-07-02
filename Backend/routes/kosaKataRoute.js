import express from "express";
import { getkosaKata } from "../controllers/kosakataContr.js";

const router = express.Router();

router.get("/kosakata", getkosaKata);

export default router;
