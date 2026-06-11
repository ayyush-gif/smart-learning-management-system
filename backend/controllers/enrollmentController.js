const Enrollment = require("../models/Enrollment");

// ENROLL IN COURSE
const enrollCourse = async (req, res) => {
  try {
    const { courseId } = req.body;

    const existingEnrollment =
      await Enrollment.findOne({
        student: req.user.id,
        course: courseId,
      });

    if (existingEnrollment) {
      return res.status(400).json({
        message: "Already enrolled",
      });
    }

    const enrollment =
      await Enrollment.create({
        student: req.user.id,
        course: courseId,
      });

    res.status(201).json({
      message: "Enrollment successful",
      enrollment,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET MY COURSES
const getMyCourses = async (req, res) => {
  try {
    const enrollments =
      await Enrollment.find({
        student: req.user.id,
      }).populate("course");

    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  enrollCourse,
  getMyCourses,
};