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

      setCourses(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>
        Welcome, {user?.name}
      </h1>

      <h2
        style={{
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        My Courses
      </h2>

      {courses.length === 0 ? (
        <p>No Courses Enrolled Yet</p>
      ) : (
        courses.map((item) => (
          <div
            key={item._id}
            className="card"
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
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;