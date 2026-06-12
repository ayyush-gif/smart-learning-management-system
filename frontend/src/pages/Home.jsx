import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <div className="container">
        <h1>
          Master Skills.
          <br />
          Build Your
          <span> Future.</span>
        </h1>

        <p>
          Learn industry-ready skills with
          premium courses designed for
          students, developers, and future
          engineers.
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
  );
}

export default Home;