export default function Home() {
  return (
    <>
      <style>{`
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 20px #b400ff, 0 0 40px #b400ff, 0 0 80px #b400ff; }
          50% { text-shadow: 0 0 40px #d966ff, 0 0 80px #d966ff, 0 0 120px #d966ff; }
        }
        .flashy { animation: glow 2s ease-in-out infinite; }
      `}</style>
      <div style={{ minHeight: "100vh", backgroundColor: "#000", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h1 className="flashy" style={{ color: "#c200ff", fontSize: "7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: 0, fontFamily: "var(--font-unbounded)" }}>
          Harvey Specter
        </h1>
      </div>
    </>
  );
}
