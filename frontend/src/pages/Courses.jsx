import { useEffect, useState } from "react";
import axios from "axios";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get(
        "https://smart-learning-management-system-4dg6.onrender.com/api/courses"
      );

      setCourses(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const enrollCourse = async (courseId) => {
    try {
      const token =
        localStorage.getItem("token");

      await axios.post(
        "https://smart-learning-management-system-4dg6.onrender.com/api/enrollments",
        { courseId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Enrollment Successful");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Enrollment Failed"
      );
    }
  };

  return (
    <div className="container">
      <h1 style={{ marginBottom: "20px" }}>
        Available Courses
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {courses.map((course) => (
          <div
            key={course._id}
            className="card"
          >
            <h2>{course.title}</h2>

            <p>{course.description}</p>

            <p>
              <strong>Category:</strong>{" "}
              {course.category}
            </p>

            <p>
              <strong>Price:</strong> ₹
              {course.price}
            </p>

            <button
              className="btn"
              onClick={() =>
                enrollCourse(course._id)
              }
            >
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;