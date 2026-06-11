const express = require("express");

const {
  createCourse,
  getCourses,
} = require("../controllers/courseController");

const {
  protect,
} = require("../middleware/authMiddleware");

const {
  authorizeRoles,
} = require("../middleware/roleMiddleware");

const router = express.Router();

router.post(
  "/",
  protect,
  authorizeRoles("instructor", "admin"),
  createCourse
);

router.get("/", getCourses);

module.exports = router;