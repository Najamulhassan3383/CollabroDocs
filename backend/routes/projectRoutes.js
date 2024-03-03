import express from "express";
import Project from "../models/documentModel.js";
import asyncHandler from "../middleware/asyncHandler.js";
import { protect, admin } from "../middleware/authMiddleware.js";
import User from "../models/userModel.js";
import {
  createProject,
  updateProject,
  deleteProject,
  addCollaboratorToProject,
  removeCollaboratorFromProject,
  getProjectsByOwnerId,
  getAllProjects,
} from "../controllers/projectController.js";

const router = express.Router();
router
  .route("/")
  .get(protect, getAllProjects)
  .post(protect, createProject)
  .put(protect, updateProject)
  .delete(protect, deleteProject);

//collaborators
router
  .route("/collaborators")
  .post(protect, addCollaboratorToProject)
  .delete(protect, removeCollaboratorFromProject);

export default router;
