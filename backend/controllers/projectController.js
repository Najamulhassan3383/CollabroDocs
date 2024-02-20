import mongoose from "mongoose";
import Project from "../models/projectModel.js";
import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

// Create a new project

const createProject = asyncHandler(async (req, res) => {
  const owner = req.user._id;
  const { name, description, collaborators, documents } = req.body;

  const project = new Project({
    name,
    description,
    collaborators,
    documents,
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
const addCollaboratorToProject = asyncHandler(async (req, res) => {
  const email = req.body.email;

  const project = await Project.findById(req.body.projectId);

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

  const collaborator = await User.findOne({ email });

  if (!collaborator) {
    return res.status(404).json({
      success: false,
      message: `User with email ${email} not found`,
    });
  }

  // Ensure project.collaborators is initialized as an array
  project.collaborators = project.collaborators || [];

  // Check if collaborator is already added to the project
  if (project.collaborators.includes(collaborator._id)) {
    return res.status(400).json({
      success: false,
      message: `User with email ${email} is already a collaborator`,
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
        message: "Something went wrong, please try again later.",
      });
    } else {
      throw error;
    }
  }
});

//remove a collaborator
const removeCollaboratorFromProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.body.projectId);
  console.log(req.body.projectId);
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

  const email = req.body.email;
  const collaborator = await User.findOne({ email });

  const collaboratorIndex = project.collaborators.indexOf(collaborator._id);

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
    message: "Collaborator successfully removed from project",
    data: project,
  });
});

// Get all projects
const getProjectsByOwnerId = asyncHandler(async (req, res) => {
  const owner = req.user._id;
  const projects = await Project.find({ owner });

  if (!projects) {
    return res.status(404).json({
      success: false,
      message: "No projects found",
    });
  }

  res.status(200).json({
    success: true,
    data: projects,
  });
});

// Update a project by ID
const updateProject = asyncHandler(async (req, res) => {
  //only owner can update the project
  const owner = req.user._id;
  const { projectId } = req.body;

  console.log(projectId, "here and project id");

  const project = await Project.findById(projectId);
  if (!project) {
    return res.status(404).json({
      success: false,
      message: "Project not found",
    });
  }
  if (owner.toString() !== project.owner.toString()) {
    return res.status(403).json({
      success: false,
      message: "Only the project owner can update the project",
    });
  }
  console.log(req.params.id);

  project.name = req.body.name || project.name;
  project.description = req.body.description || project.description;

  const updatedproject = await project.save();

  if (updatedproject) {
    return res.status(200).json({
      success: true,
      data: updatedproject,
    });
  }
  return res.status(500).json({
    success: false,
    message: "Something went wrong, please try again later",
  });
});

// Delete a project by ID
const deleteProject = asyncHandler(async (req, res) => {
  //only owner can delete the project
  const owner = req.user._id;
  const project = await Project.findByIdAndDelete(req.body.projectId);

  if (!project) {
    return res.status(404).json({
      success: false,
      message: "Project not found",
    });
  }
  if (owner.toString() !== project.owner.toString()) {
    return res.status(403).json({
      success: false,
      message: "Only the project owner can delete the project",
    });
  }
  res.status(200).json({
    success: true,
    message: "Project deleted",
  });
});

export {
  createProject,
  updateProject,
  deleteProject,
  addCollaboratorToProject,
  removeCollaboratorFromProject,
  getProjectsByOwnerId,
};
