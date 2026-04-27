export default function Home() {
  return (
    <>
      <style>{`
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 20px #d4a0ff, 0 0 40px #d4a0ff, 0 0 80px #d4a0ff; }
          50% { text-shadow: 0 0 40px #e8c8ff, 0 0 80px #e8c8ff, 0 0 120px #e8c8ff; }
        }
        .flashy { color: #d4a0ff; animation: glow 2s ease-in-out infinite; transition: color 0.3s ease; }
        .flashy:hover { color: #5b0096; }
      `}</style>
      <div style={{ minHeight: "100vh", backgroundColor: "#000", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h1 className="flashy" style={{ fontSize: "7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: 0, fontFamily: "var(--font-unbounded)" }}>
          Harvey Specter
        </h1>
      </div>
    </>
  );
}
