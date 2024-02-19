import express from "express";
import Project from "../models/documentModel.js";
import asyncHandler from "../middleware/asyncHandler.js";
import { protect, admin } from "../middleware/authMiddleware.js";
import User from "../models/userModel.js";
import {
    createProject,
    getProject,
    getProjects,
    updateProject,
    deleteProject,
    addCollaborator,
    removeCollaborator
  } from "../controllers/projectController.js";

const router = express.Router();
router.get("/", protect, admin, getProjects);
router.post("/create", protect, admin, createProject);

router.get("/:id",protect,admin, getProject)
router.post("/:id",protect,admin, updateProject)

router.delete("/:id",protect,admin, deleteProject)

//collaborators
router.post("/colab/:id",protect,admin, addCollaborator)
router.delete("/colab/remove/:id",protect,admin, removeCollaborator)




export default router;
