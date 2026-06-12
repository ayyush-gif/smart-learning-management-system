import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [courses, setCourses] = useState([]);

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  useEffect(() => {
    fetchMyCourses();
  }, []);

  const fetchMyCourses = async () => {
    try {
      const token =
        localStorage.getItem("token");

      const res = await axios.get(
        "https://smart-learning-management-system-4dg6.onrender.com/api/enrollments/my-courses",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCourses(
        res.data.map((course, index) => ({
          ...course,
          progress:
            [80, 50, 20, 65, 35][index] || 0,
        }))
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>
        Welcome, {user?.name}
      </h1>

      {/* Stats Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "30px",
          marginBottom: "40px",
        }}
      >
        <div className="card">
          <h3>📚 Enrolled Courses</h3>
          <h2>{courses.length}</h2>
        </div>

        <div className="card">
          <h3>🏆 Learning Status</h3>
          <h2>Active</h2>
        </div>

        <div className="card">
          <h3>🚀 Platform</h3>
          <h2>Lumina</h2>
        </div>
      </div>

      <h2
        style={{
          marginBottom: "25px",
        }}
      >
        My Learning Journey
      </h2>

      {courses.length === 0 ? (
        <div className="card">
          <p>
            No Courses Enrolled Yet
          </p>
        </div>
      ) : (
        courses.map((item) => (
          <div
            key={item._id}
            className="card"
            style={{
              marginBottom: "20px",
            }}
          >
            <h3>
              {item.course.title}
            </h3>

            <p>
              {
                item.course
                  .description
              }
            </p>

            <p>
              ₹{item.course.price}
            </p>

            <div
              style={{
                marginTop: "15px",
              }}
            >
              <p>
                Progress:{" "}
                {item.progress}%
              </p>

              <div
                style={{
                  width: "100%",
                  height: "12px",
                  background: "#333",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${item.progress}%`,
                    height: "100%",
                    background:
                      "#facc15",
                    borderRadius:
                      "10px",
                  }}
                />
              </div>

              <button
                className="btn"
                style={{
                  marginTop: "15px",
                }}
                onClick={() =>
                  window.open(
                    "/certificate",
                    "_blank"
                  )
                }
              >
                🎓 View Certificate
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;