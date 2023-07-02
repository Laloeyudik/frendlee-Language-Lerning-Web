import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/Users.js";
import { verifyStudent, verifyTeacher } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/users", verifyStudent, verifyTeacher, getUsers);
router.get("/users/:id", verifyStudent, verifyTeacher, getUserById);
router.post("/users", createUser);
router.patch("/users/:id", verifyStudent, verifyTeacher, updateUser);
router.delete("/users/:id", verifyStudent, verifyTeacher, deleteUser);

export default router;
