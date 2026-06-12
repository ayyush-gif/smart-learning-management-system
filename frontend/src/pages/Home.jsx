import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <img
            src="/logo.png"
            alt="LUMINA"
            style={{
              width: "140px",
              marginBottom: "20px",
            }}
          />

          <h1>
            LUMINA
            <br />
            <span>
              Illuminate Your Learning
            </span>
          </h1>

          <p>
            Master skills, track progress,
            and unlock your future with
            industry-ready courses designed
            for students, developers, and
            future engineers.
          </p>

          <div
            style={{
              marginTop: "30px",
            }}
          >
            <Link to="/courses">
              <button className="btn">
                Explore Courses
              </button>
            </Link>
          </div>
        </div>
      </section>

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

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
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
        </div>
      </section>
    </>
  );
}

export default Home;