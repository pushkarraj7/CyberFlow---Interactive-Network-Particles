import { useEffect, useRef } from "react";

export default function LandingPage7() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const syntax = [
      "function helloWorld() {",
      "console.log('Hello, World!');",
      "}",
      "const x = Math.random();",
      "let data = fetch('api/data');",
      "if (true) { return false; }",
      "for (let i = 0; i < 10; i++) {",
      "while (condition) { doSomething(); }",
      "def foo(): return 'bar'",
      "import os",
      "print('Hello, Python!')",
      "System.out.println('Java Code');",
    ];

    const fontSize = 18;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    function drawCodeRain() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0"; // Green hacker-style text
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const text = syntax[Math.floor(Math.random() * syntax.length)];
        const x = i * fontSize;

        ctx.fillText(text, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });

      requestAnimationFrame(drawCodeRain);
    }

    drawCodeRain();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-black">
      <canvas ref={canvasRef} className="absolute top-0 left-0"></canvas>
      <div className="relative z-10 flex flex-col items-center justify-center text-white h-full">
        <h1 className="text-5xl font-bold">Coding Syntax Rain</h1>
        <p className="mt-4 text-lg opacity-80">Hacker-style falling code effect</p>
      </div>
    </div>
  );
}
