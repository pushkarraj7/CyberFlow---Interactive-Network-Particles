import { useEffect, useRef } from "react";

export default function LandingPage3() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "01";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function drawMatrix() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0"; // Green color
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const text = letters[Math.floor(Math.random() * letters.length)];
        const x = i * fontSize;

        ctx.fillText(text, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });

      requestAnimationFrame(drawMatrix);
    }

    drawMatrix();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => window.removeEventListener("resize", () => {});
  }, []);

  return (
    <div className="matrix-container">
      <canvas ref={canvasRef} className="matrix-canvas"></canvas>

      {/* Text Container Positioned Above Canvas */}
      <div className="matrix-text">
        <h1 className="text-5xl font-bold">Tech Network Effect</h1>
        <p className="mt-4 text-lg opacity-80">Floating nodes with a parallax effect</p>
      </div>
    </div>
  );
}
