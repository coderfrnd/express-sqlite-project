import express from "express";
const router = express.Router();
import {
  create,
  deleteById,
  findAll,
  findById,
  getAllPublished,
  removeAll,
  updateById,
} from "../controllers/tutorial.controller.js";

// Create a new Tutorial
router.post("/", create);

// Retrieve all Tutorials
router.get("/", findAll);

// Retrieve all published Tutorials
router.get("/published", getAllPublished);

// Retrieve a single Tutorial with id
router.get("/:id", findById);

// Update a Tutorial with id
router.put("/:id", updateById);

// Delete a Tutorial with id
router.delete("/:id", deleteById);

// Delete all Tutorials
router.delete("/", removeAll);

export { router };
