import { useEffect, useRef } from "react";

export default function LandingPage5() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    const numParticles = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speedX = Math.random() * 2 + 1;
        this.speedY = Math.random() * 1 - 0.5;
        this.size = Math.random() * 3 + 1;
        this.opacity = Math.random() * 0.5 + 0.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }

      draw() {
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = "#0ff"; // Glowing cyan color
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function initParticles() {
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }

    initParticles();
    animate();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      initParticles();
    });

    return () => window.removeEventListener("resize", () => {});
  }, []);

  return (
    <div className="relative w-full h-screen">
      <canvas ref={canvasRef} className="absolute top-0 left-0"></canvas>
      <div className="relative z-10 flex flex-col items-center justify-center text-white h-full">
        <h1 className="text-5xl font-bold">Data Flow Streams</h1>
        <p className="mt-4 text-lg opacity-80">A flowing digital stream effect</p>
      </div>
    </div>
  );
}
