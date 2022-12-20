import express from "express";
import { trending } from "../controllers/videoController";
import { login, join } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/login", login);
globalRouter.get("/join", join);

export default globalRouter;
