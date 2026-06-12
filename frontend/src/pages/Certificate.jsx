function Certificate() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <div className="container">
      <div
        className="card"
        style={{
          maxWidth: "900px",
          margin: "50px auto",
          textAlign: "center",
          padding: "50px",
          border: "3px solid #facc15",
        }}
      >
        <h1
          style={{
            color: "#facc15",
            marginBottom: "20px",
          }}
        >
          🏆 Certificate of Completion
        </h1>

        <p>
          This certificate is proudly awarded to
        </p>

        <h2
          style={{
            margin: "20px 0",
          }}
        >
          {user?.name}
        </h2>

        <p>
          for successfully completing
        </p>

        <h3
          style={{
            color: "#facc15",
            margin: "20px 0",
          }}
        >
          Data Structures in C
        </h3>

        <p>
          on the Lumina Learning Platform
        </p>

        <br />

        <p>
          Date:{" "}
          {new Date().toLocaleDateString()}
        </p>

        <br />

        <h3
          style={{
            color: "#facc15",
          }}
        >
          Lumina
        </h3>

        <p>
          Illuminate Your Learning
        </p>
      </div>
    </div>
  );
}

export default Certificate;