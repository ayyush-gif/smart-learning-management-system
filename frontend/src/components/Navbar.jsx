import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav
      style={{
        background: "#1e293b",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2>Smart LMS</h2>

      <div>
        <Link
          to="/"
          style={{
            color: "white",
            marginRight: "15px",
          }}
        >
          Home
        </Link>

        <Link
          to="/courses"
          style={{
            color: "white",
            marginRight: "15px",
          }}
        >
          Courses
        </Link>

        {!user ? (
          <>
            <Link
              to="/login"
              style={{
                color: "white",
                marginRight: "15px",
              }}
            >
              Login
            </Link>

            <Link
              to="/register"
              style={{
                color: "white",
              }}
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/dashboard"
              style={{
                color: "white",
                marginRight: "15px",
              }}
            >
              Dashboard
            </Link>

            <button
              className="btn"
              onClick={logoutHandler}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;