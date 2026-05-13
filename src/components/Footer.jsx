export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0f172a",
        color: "#94a3b8",
        padding: "40px 24px",
        textAlign: "center",
      }}
    >
      {/* About Section */}
      <div style={{ marginBottom: "24px" }}>
        <h3
          style={{
            color: "#f1f5f9",
            fontSize: "16px",
            marginBottom: "8px",
          }}
        >
          About the Team
        </h3>

        <p
          style={{
            fontSize: "14px",
            maxWidth: "500px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          AstroAtlas is built by a passionate team of developers from TS Academy
          — Victor, Chinemerem, Doxi, Duke, Josh, Kenward, Marie & Tobi.
        </p>
      </div>

      {/* Links */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          marginBottom: "24px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="https://tsacademyonline.com/"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#38bdf8",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          TS Academy
        </a>

        <a
          href="https://github.com/Kenward-dev/AstroAtlas"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#38bdf8",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          GitHub Repo
        </a>
      </div>

      {/* Copyright */}
      <p style={{ fontSize: "12px" }}>
        © {new Date().getFullYear()} AstroAtlas · TS Academy
      </p>
    </footer>
  );
}
