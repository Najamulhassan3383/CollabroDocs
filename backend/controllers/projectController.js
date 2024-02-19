import mongoose from "mongoose";
import Project from "../models/projectModel.js";
import asyncHandler from "../middleware/asyncHandler.js";
import { protect, admin } from "../middleware/authMiddleware.js";
import User from "../models/userModel.js";

// Create a new project

const createProject = asyncHandler(async (req, res) => {
  const user = await User;
  //   console.log(req.user)
  const owner = req.user;

  const project = new Project({
    ...req.body,
    owner: owner._id,
  });

  await project.save();

  res.status(201).json({
    success: true,
    data: project,
    message: "Project created successfully",
  });
});

// Add a collaborator to a project
const addCollaborator = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return res.status(404).json({
      success: false,
      message: "Project not found",
    });
  }

  if (req.user._id.toString() !== project.owner.toString()) {
    return res.status(403).json({
      success: false,
      message: "Only the project owner can add collaborators",
    });
  }

  const collaborator = await User.findById(req.body.Id);

  console.log(req.body.Id);
  if (!collaborator) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  project.collaborators.push(collaborator._id);

  try {
    await project.save();
    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({
        success: false,
        message: "A project with this name already exists",
      });
    } else {
      throw error;
    }
  }
});
//remove a collaborator
const removeCollaborator = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);
  console.log(req.params.id);
  if (!project) {
    return res.status(404).json({
      success: false,
      message: "Project not found",
    });
  }

  if (req.user._id.toString() !== project.owner.toString()) {
    return res.status(403).json({
      success: false,
      message: "Only the project owner can remove collaborators",
    });
  }

  const collaboratorId = req.body.Id;
  const collaboratorIndex = project.collaborators.indexOf(collaboratorId);

  if (collaboratorIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Collaborator not found in this project",
    });
  }

  project.collaborators.splice(collaboratorIndex, 1);

  await project.save();

  res.status(200).json({
    success: true,
    data: project,
  });
});

// Get all projects
const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find();

  res.status(200).json({
    success: true,
    data: projects,
  });
});

// Get a single project by ID
const getProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);
  console.log(req.params.id);

  if (!project) {
    return res.status(404).json({
      success: false,
      message: "Project not found",
    });
  }

  res.status(200).json({
    success: true,
    data: project,
  });
});

// Update a project by ID
const updateProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);
  console.log(req.params.id);
  if (project) {
    project.name = req.body.name || project.name;
    project.description = req.body.description || project.description;

    const updatedproject = await project.save();

    res.json({
      _id: updatedproject._id,
      name: updatedproject.name,
      email: updatedproject.description,
    });
  } else {
    res.status(404);
    throw new Error("project not found");
  }
});

// Delete a project by ID
const deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findByIdAndDelete(req.params.id);

  if (!project) {
    return res.status(404).json({
      success: false,
      message: "Project not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Project deleted",
  });
});

export {
  createProject,
  getProject,
  getProjects,
  updateProject,
  deleteProject,
  addCollaborator,
  removeCollaborator,
};
