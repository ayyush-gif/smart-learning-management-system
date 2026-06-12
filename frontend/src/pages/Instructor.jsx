import { useState } from "react";
import axios from "axios";

function Instructor() {
  const [formData, setFormData] =
    useState({
      title: "",
      description: "",
      category: "",
      price: "",
      image: "",
    });

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

      setFormData({
        title: "",
        description: "",
        category: "",
        price: "",
        image: "",
      });
    } catch (error) {
      alert(
        error.response?.data
          ?.message ||
          "Course Creation Failed"
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

      <div
        className="card"
        style={{
          maxWidth: "700px",
          margin: "auto",
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
            Create Course
          </button>
        </form>
      </div>
    </div>
  );
}

export default Instructor;