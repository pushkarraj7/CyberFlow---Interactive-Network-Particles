import { useEffect, useState } from "react";

export default function LandingPage9() {
  const [glitchText, setGlitchText] = useState("GLITCH EFFECT");

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchText((prev) =>
        prev
          .split("")
          .map((char) => (Math.random() > 0.8 ? String.fromCharCode(33 + Math.random() * 94) : char))
          .join("")
      );
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Glitch Text */}
      <h1 className="glitch text-6xl md:text-8xl font-bold text-green-400">{glitchText}</h1>

      {/* Overlay effects */}
      <div className="absolute top-0 left-0 w-full h-full glitch-overlay pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full scanlines pointer-events-none"></div>

      {/* Additional glitch effect layers */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 mix-blend-overlay pointer-events-none"></div>
    </div>
  );
}
