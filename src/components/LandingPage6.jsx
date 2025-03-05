import { useEffect, useRef } from "react";

export default function LandingPage6() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let gridSize = 50; // Increase grid size for better visibility
    let perspective = 500; // Increase depth effect
    let speed = 0.005; // Slow down rotation speed
    let angle = 0;

    function drawGrid() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "rgba(0, 255, 255, 0.7)"; // Neon Cyan Grid
      ctx.lineWidth = 1.2;

      let centerX = canvas.width / 2;
      let centerY = canvas.height / 2;

      ctx.beginPath();
      for (let x = -canvas.width; x < canvas.width; x += gridSize) {
        for (let y = -canvas.height; y < canvas.height; y += gridSize) {
          let x1 = x * Math.cos(angle) - y * Math.sin(angle);
          let y1 = x * Math.sin(angle) + y * Math.cos(angle);
          let depth = perspective / (perspective + y1 + 200);
          let screenX = centerX + x1 * depth;
          let screenY = centerY + y1 * depth;

          ctx.moveTo(screenX, screenY);
          ctx.lineTo(screenX + gridSize * depth, screenY);
          ctx.lineTo(screenX + gridSize * depth, screenY + gridSize * depth);
        }
      }
      ctx.stroke();

      angle += speed;
      requestAnimationFrame(drawGrid);
    }

    drawGrid();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-black">
      <canvas ref={canvasRef} className="absolute top-0 left-0"></canvas>
      <div className="relative z-10 flex flex-col items-center justify-center text-white h-full">
        <h1 className="text-5xl font-bold">Holographic Wireframe Grid</h1>
        <p className="mt-4 text-lg opacity-80">A rotating 3D grid with neon glow</p>
      </div>
    </div>
  );
}
