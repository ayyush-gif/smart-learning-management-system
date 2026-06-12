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
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "80px",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <img
              src="/logo.png"
              alt="Lumina"
              style={{
                width: "50px",
                height: "50px",
                objectFit: "contain",
              }}
            />

            <div>
              <h2
                style={{
                  color: "#facc15",
                  margin: 0,
                  fontWeight: "800",
                  letterSpacing: "2px",
                }}
              >
                LUMINA
              </h2>

              <p
                style={{
                  margin: 0,
                  fontSize: "12px",
                  color: "#a1a1aa",
                }}
              >
                Illuminate Your Learning
              </p>
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            gap: "25px",
            alignItems: "center",
          }}
        >
          <Link to="/">Home</Link>

          <Link to="/courses">
            Courses
          </Link>

          {!user ? (
            <>
              <Link to="/login">
                Login
              </Link>

              <Link to="/register">
                Register
              </Link>
            </>
          ) : (
            <>
              <Link to="/dashboard">
                Dashboard
              </Link>

              <Link to="/profile">
                Profile
              </Link>

              {user.role ===
                "instructor" && (
                <Link to="/instructor">
                  Instructor
                </Link>
              )}

              <button
                className="btn"
                onClick={logoutHandler}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;