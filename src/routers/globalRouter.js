import express from "express";
import { trending } from "../controllers/videoController";
import {
  getLogin,
  postLogin,
  logout,
  join,
} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.route("/login").get(getLogin).post(postLogin);
globalRouter.get("/logout", logout);
globalRouter.get("/join", join);

export default globalRouter;
