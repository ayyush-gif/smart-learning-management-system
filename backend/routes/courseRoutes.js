const express = require("express");

const {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");

const {
  protect,
} = require("../middleware/authMiddleware");

const {
  authorizeRoles,
} = require("../middleware/roleMiddleware");

const router = express.Router();

// CREATE COURSE
router.post(
  "/",
  protect,
  authorizeRoles("instructor", "admin"),
  createCourse
);

// GET ALL COURSES
router.get("/", getCourses);

// GET SINGLE COURSE
router.get("/:id", getCourseById);

// UPDATE COURSE
router.put(
  "/:id",
  protect,
  authorizeRoles("instructor", "admin"),
  updateCourse
);

// DELETE COURSE
router.delete(
  "/:id",
  protect,
  authorizeRoles("instructor", "admin"),
  deleteCourse
);

module.exports = router;