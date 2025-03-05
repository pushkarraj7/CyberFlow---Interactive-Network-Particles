// import { useEffect, useRef } from "react";

// export default function LandingPage4() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const circuitLines = [];
//     const numLines = 50;

//     class CircuitLine {
//       constructor() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.length = Math.random() * 80 + 50;
//         this.speed = Math.random() * 2 + 0.5;
//         this.direction = Math.random() < 0.5 ? 1 : -1;
//         this.glow = Math.random() * 5 + 2;
//       }

//       draw() {
//         ctx.beginPath();
//         ctx.moveTo(this.x, this.y);
//         ctx.lineTo(this.x + this.length * this.direction, this.y);
//         ctx.lineWidth = 2;
//         ctx.strokeStyle = `rgba(0, 255, 255, ${Math.random() * 0.8 + 0.2})`;
//         ctx.shadowBlur = this.glow;
//         ctx.shadowColor = "cyan";
//         ctx.stroke();
//       }

//       update() {
//         this.x += this.speed * this.direction;
//         if (this.x > canvas.width || this.x < 0) {
//           this.x = Math.random() * canvas.width;
//           this.y = Math.random() * canvas.height;
//         }
//       }
//     }

//     for (let i = 0; i < numLines; i++) {
//       circuitLines.push(new CircuitLine());
//     }

//     function animate() {
//       ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       circuitLines.forEach((line) => {
//         line.update();
//         line.draw();
//       });

//       requestAnimationFrame(animate);
//     }

//     animate();

//     window.addEventListener("resize", () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     });

//     return () => window.removeEventListener("resize", () => {});
//   }, []);

//   return (
//     <div className="circuit-container">
//       <canvas ref={canvasRef} className="circuit-canvas"></canvas>
//     </div>
//   );
// }




import { useEffect, useRef } from "react";

export default function LandingPage4() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const circuitLines = [];
    const numLines = 50;

    class CircuitLine {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.length = Math.random() * 80 + 50;
        this.speed = Math.random() * 2 + 0.5;
        this.direction = Math.random() < 0.5 ? 1 : -1;
        this.glow = Math.random() * 5 + 2;
      }

      draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.length * this.direction, this.y);
        ctx.lineWidth = 2;
        ctx.strokeStyle = `rgba(0, 255, 255, ${Math.random() * 0.8 + 0.2})`;
        ctx.shadowBlur = this.glow;
        ctx.shadowColor = "cyan";
        ctx.stroke();
      }

      update() {
        this.x += this.speed * this.direction;
        if (this.x > canvas.width || this.x < 0) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }
      }
    }

    for (let i = 0; i < numLines; i++) {
      circuitLines.push(new CircuitLine());
    }

    function animate() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      circuitLines.forEach((line) => {
        line.update();
        line.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => window.removeEventListener("resize", () => {});
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Circuit Board Animation */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full"></canvas>

      {/* Cyberpunk-Style Glowing Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 animate-pulse">
          Cyber Circuit Board
        </h1>
        <p className="text-lg md:text-2xl text-cyan-200 mt-4">
          The Future of Connectivity
        </p>
      </div>
    </div>
  );
}
