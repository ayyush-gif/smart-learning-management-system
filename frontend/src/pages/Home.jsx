import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <img
            src="/logo.png"
            alt="LUMINA"
            style={{
              width: "300px",
              maxWidth: "100%",
              marginBottom: "20px",
            }}
          />

          <h1>
            Illuminate Your
            <br />
            <span>Learning Journey</span>
          </h1>

          <p>
            Master industry-ready skills,
            track your progress, earn
            certificates, and build your
            future with Lumina.
          </p>

          <div
            style={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <Link to="/courses">
              <button className="btn">
                Explore Courses
              </button>
            </Link>

            <Link to="/register">
              <button
                className="btn"
                style={{
                  background: "transparent",
                  border:
                    "1px solid #facc15",
                  color: "#facc15",
                }}
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px,1fr))",
            gap: "20px",
            marginBottom: "60px",
          }}
        >
          <div className="card">
            <h2>100+</h2>
            <p>Students</p>
          </div>

          <div className="card">
            <h2>20+</h2>
            <p>Courses</p>
          </div>

          <div className="card">
            <h2>95%</h2>
            <p>Completion Rate</p>
          </div>

          <div className="card">
            <h2>24/7</h2>
            <p>Learning Access</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container">
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            color: "#facc15",
          }}
        >
          Why Choose Lumina?
        </h2>

        <div className="course-grid">
          <div className="card">
            <h3>📚 Premium Courses</h3>
            <p>
              Learn from structured and
              practical courses built for
              real-world skills.
            </p>
          </div>

          <div className="card">
            <h3>🚀 Career Growth</h3>
            <p>
              Gain knowledge that helps you
              succeed in placements,
              internships, and jobs.
            </p>
          </div>

          <div className="card">
            <h3>🎯 Track Progress</h3>
            <p>
              Monitor your enrolled courses
              and learning journey in one
              place.
            </p>
          </div>

          <div className="card">
            <h3>🏆 Certifications</h3>
            <p>
              Earn certificates after course
              completion and showcase your
              achievements.
            </p>
          </div>

          <div className="card">
            <h3>🌎 Learn Anywhere</h3>
            <p>
              Access your courses anytime,
              anywhere, on any device.
            </p>
          </div>

          <div className="card">
            <h3>⚡ Fast & Modern</h3>
            <p>
              Built with modern technology
              for a seamless learning
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="container"
        style={{
          textAlign: "center",
          marginTop: "80px",
          marginBottom: "50px",
        }}
      >
        <div className="card">
          <h2
            style={{
              color: "#facc15",
            }}
          >
            Ready to Start Learning?
          </h2>

          <p
            style={{
              marginTop: "15px",
            }}
          >
            Join Lumina today and begin
            your journey toward success.
          </p>

          <Link to="/register">
            <button
              className="btn"
              style={{
                marginTop: "20px",
              }}
            >
              Join Lumina
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;