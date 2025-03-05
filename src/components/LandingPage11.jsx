import { useEffect, useRef } from "react";

export default function LandingPage11() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const particleCount = 500;
    let time = 0;

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
      });
    }

    function perlinNoise(x, y, t) {
      return Math.sin(x * 0.02 + t * 0.005) * Math.cos(y * 0.02 - t * 0.005);
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      time += 0.5;

      particles.forEach((p) => {
        const noiseX = perlinNoise(p.x, p.y, time) * 2;
        const noiseY = perlinNoise(p.y, p.x, time) * 2;

        p.x += noiseX;
        p.y += noiseY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `rgba(0, 255, 255, 0.8)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    // Resize handling
    function handleResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full bg-black"></canvas>;
}
