import { useEffect, useState } from "react";
import axios from "axios";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");

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

  const filteredCourses = courses.filter(
    (course) =>
      course.title
        .toLowerCase()
        .includes(search.toLowerCase())
  );

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
      <h1
        style={{
          textAlign: "center",
          color: "#facc15",
          marginBottom: "10px",
        }}
      >
        Explore Courses
      </h1>

      <p
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Discover premium courses and
        illuminate your future.
      </p>

      {/* Search Box */}
      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto 40px",
        }}
      >
        <input
          className="input"
          type="text"
          placeholder="🔍 Search Courses..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      <div className="course-grid">
        {filteredCourses.length === 0 ? (
          <p
            style={{
              textAlign: "center",
              gridColumn: "1/-1",
            }}
          >
            No courses found.
          </p>
        ) : (
          filteredCourses.map((course) => (
            <div
              key={course._id}
              className="card"
            >
              <img
                src={course.image}
                alt={course.title}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  marginBottom: "15px",
                }}
              />

              <span
                style={{
                  background: "#facc15",
                  color: "#000",
                  padding: "5px 12px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                {course.category}
              </span>

              <h2
                style={{
                  marginTop: "15px",
                }}
              >
                {course.title}
              </h2>

              <p>
                {course.description}
              </p>

              <h3
                style={{
                  color: "#facc15",
                  marginTop: "15px",
                }}
              >
                ₹{course.price}
              </h3>

              <button
                className="btn"
                style={{
                  width: "100%",
                }}
                onClick={() =>
                  enrollCourse(course._id)
                }
              >
                Enroll Now
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Courses;