function Profile() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <div className="container">
      <h1
        style={{
          textAlign: "center",
          color: "#facc15",
          marginBottom: "30px",
        }}
      >
        My Profile
      </h1>

      <div
        className="card"
        style={{
          maxWidth: "700px",
          margin: "auto",
          textAlign: "center",
          padding: "40px",
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: "#facc15",
            color: "#000",
            fontSize: "48px",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto 20px",
          }}
        >
          {user?.name?.charAt(0)}
        </div>

        <h2>{user?.name}</h2>

        <p
          style={{
            color: "#facc15",
            fontWeight: "600",
          }}
        >
          {user?.role?.toUpperCase()}
        </p>

        <hr
          style={{
            margin: "25px 0",
            borderColor: "#333",
          }}
        />

        <div
          style={{
            textAlign: "left",
          }}
        >
          <p>
            📧 <strong>Email:</strong>{" "}
            {user?.email}
          </p>

          <p>
            🏆 <strong>Status:</strong>{" "}
            Active Learner
          </p>

          <p>
            📚 <strong>Courses:</strong>{" "}
            Enrolled Student
          </p>

          <p>
            📅 <strong>Member:</strong>{" "}
            Lumina Community
          </p>
        </div>

        <button
          className="btn"
          style={{
            marginTop: "25px",
          }}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;