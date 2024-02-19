import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";
import {
  getDocumentsByProject,
  getDocument,
  createDocument,
  updateDocument,
  deleteDocument,
  getPreviousVersion,
  getVersions
} from "../controllers/documentController.js";

const router = express.Router();
router.route("/").post(protect, admin, createDocument);
router.route("/:id").get(protect, getDocumentsByProject);
router.route("/:id").get(protect, getDocument);
router.route("/:id").put(protect, admin, updateDocument);
router.route("/:id").delete(protect, admin, deleteDocument);
router.route("/allversions/:id").get(protect,admin, getVersions);
router.route("/previous/:id").get(protect,admin, getPreviousVersion);


export default router;
