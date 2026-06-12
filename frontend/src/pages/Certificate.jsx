import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

function Certificate() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const downloadCertificate = () => {
    const input =
      document.getElementById(
        "certificate"
      );

    html2canvas(input).then((canvas) => {
      const imgData =
        canvas.toDataURL("image/png");

      const pdf = new jsPDF(
        "landscape",
        "mm",
        "a4"
      );

      pdf.addImage(
        imgData,
        "PNG",
        10,
        10,
        277,
        190
      );

      pdf.save(
        "Lumina-Certificate.pdf"
      );
    });
  };

  return (
    <div className="container">
      <div
        id="certificate"
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
          }}
        >
          🏆 Certificate of Completion
        </h1>

        <p>
          This certificate is awarded to
        </p>

        <h2>
          {user?.name}
        </h2>

        <p>
          for successfully completing
        </p>

        <h3
          style={{
            color: "#facc15",
          }}
        >
          Data Structures in C
        </h3>

        <p>
          on Lumina Learning Platform
        </p>

        <p>
          Date:{" "}
          {new Date().toLocaleDateString()}
        </p>

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

      <div
        style={{
          textAlign: "center",
        }}
      >
        <button
          className="btn"
          onClick={
            downloadCertificate
          }
        >
          📄 Download PDF
        </button>
      </div>
    </div>
  );
}

export default Certificate;