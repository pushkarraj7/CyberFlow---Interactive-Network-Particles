import { useEffect, useRef } from "react";
import Cursor from "./Cursor"; // Custom cursor component

export default function LandingPage2() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let nodes = [];
    const numNodes = 100;

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        dx: (Math.random() - 0.5) * 1.5,
        dy: (Math.random() - 0.5) * 1.5,
      });
    }

    function drawNodes() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((node, index) => {
        node.x += node.dx;
        node.y += node.dy;

        if (node.x <= 0 || node.x >= canvas.width) node.dx *= -1;
        if (node.y <= 0 || node.y >= canvas.height) node.dy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.fill();

        // Connect nearby nodes
        for (let j = index + 1; j < nodes.length; j++) {
          const distance = Math.hypot(node.x - nodes[j].x, node.y - nodes[j].y);
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 150})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(drawNodes);
    }

    drawNodes();

    // Mouse parallax effect
    const handleMouseMove = (event) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;

      nodes.forEach((node) => {
        const dx = (event.clientX - canvas.width / 2) * 0.001;
        const dy = (event.clientY - canvas.height / 2) * 0.001;
        node.x += dx;
        node.y += dy;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900 flex justify-center items-center text-white">
      <Cursor /> {/* Custom Cursor */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold">Neural Network Effect</h1>
        <p className="mt-4 text-lg opacity-80">Floating nodes with a parallax effect</p>
      </div>
    </div>
  );
}
