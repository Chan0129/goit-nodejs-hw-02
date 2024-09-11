import express from "express";
import { ctrlWrapper } from "../../helpers/ctrlWrapper";
import {
  signupUser,
  loginUser,
  logoutUser,
  getCurrentUsers,
  updateUserSubscription,
} from "../../controllers/usersController";
import { authenticateToken } from "../../middlewares/authenticateToken";

const router = express.Router();

router.post("/signup", ctrlWrapper(signupUser));

router.post("/login", ctrlWrapper(loginUser));

router.get("/logout", authenticateToken, ctrlWrapper(logoutUser));

router.get("/current", authenticateToken, ctrlWrapper(getCurrentUsers));

router.patch("/", authenticateToken, ctrlWrapper(updateUserSubscription));
export { router };