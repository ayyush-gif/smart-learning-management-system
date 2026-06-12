import { useEffect, useState } from "react";
import axios from "axios";

function Instructor() {
  const [courses, setCourses] = useState([]);
  const [editingId, setEditingId] =
    useState(null);

  const [formData, setFormData] =
    useState({
      title: "",
      description: "",
      category: "",
      price: "",
      image: "",
    });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token =
        localStorage.getItem("token");

      if (editingId) {
        await axios.put(
          `https://smart-learning-management-system-4dg6.onrender.com/api/courses/${editingId}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        alert(
          "Course Updated Successfully"
        );

        setEditingId(null);
      } else {
        await axios.post(
          "https://smart-learning-management-system-4dg6.onrender.com/api/courses",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        alert(
          "Course Created Successfully"
        );
      }

      setFormData({
        title: "",
        description: "",
        category: "",
        price: "",
        image: "",
      });

      fetchCourses();
    } catch (error) {
      alert(
        error.response?.data
          ?.message ||
          "Operation Failed"
      );
    }
  };

  const editCourse = (course) => {
    setEditingId(course._id);

    setFormData({
      title: course.title,
      description:
        course.description,
      category: course.category,
      price: course.price,
      image: course.image,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const deleteCourse = async (
    courseId
  ) => {
    try {
      const token =
        localStorage.getItem("token");

      await axios.delete(
        `https://smart-learning-management-system-4dg6.onrender.com/api/courses/${courseId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(
        "Course Deleted Successfully"
      );

      fetchCourses();
    } catch (error) {
      alert(
        error.response?.data
          ?.message ||
          "Delete Failed"
      );
    }
  };

  return (
    <div className="container">
      <h1
        style={{
          textAlign: "center",
          color: "#facc15",
          marginBottom: "30px",
        }}
      >
        Instructor Dashboard
      </h1>

      {/* Course Form */}
      <div
        className="card"
        style={{
          maxWidth: "700px",
          margin: "auto",
          marginBottom: "40px",
        }}
      >
        <form
          onSubmit={handleSubmit}
        >
          <input
            className="input"
            type="text"
            name="title"
            placeholder="Course Title"
            value={formData.title}
            onChange={handleChange}
          />

          <input
            className="input"
            type="text"
            name="description"
            placeholder="Description"
            value={
              formData.description
            }
            onChange={handleChange}
          />

          <input
            className="input"
            type="text"
            name="category"
            placeholder="Category"
            value={
              formData.category
            }
            onChange={handleChange}
          />

          <input
            className="input"
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
          />

          <input
            className="input"
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
          />

          <button
            className="btn"
            type="submit"
          >
            {editingId
              ? "Update Course"
              : "Create Course"}
          </button>
        </form>
      </div>

      {/* Courses List */}
      <h2
        style={{
          marginBottom: "20px",
          color: "#facc15",
        }}
      >
        My Courses
      </h2>

      {courses.map((course) => (
        <div
          key={course._id}
          className="card"
          style={{
            marginBottom: "20px",
          }}
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

          <h3>{course.title}</h3>

          <p>
            {course.description}
          </p>

          <p>
            <strong>
              Category:
            </strong>{" "}
            {course.category}
          </p>

          <p>
            <strong>
              Price:
            </strong>{" "}
            ₹{course.price}
          </p>

          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "15px",
            }}
          >
            <button
              className="btn"
              onClick={() =>
                editCourse(course)
              }
            >
              ✏️ Edit
            </button>

            <button
              className="btn"
              onClick={() =>
                deleteCourse(
                  course._id
                )
              }
            >
              🗑 Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Instructor;