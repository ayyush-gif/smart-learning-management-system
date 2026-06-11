const Course = require("../models/Course");

// CREATE COURSE
const createCourse = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      price,
    } = req.body;

    const course = await Course.create({
      title,
      description,
      category,
      price,
    });

    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET ALL COURSES
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createCourse,
  getCourses,
};