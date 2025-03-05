// import { useEffect, useRef } from "react";

// export default function LandingPage1() {
//   const canvasRef = useRef(null);
//   const mouse = useRef({ x: null, y: null });

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     let lines = [];
//     const numLines = 50;

//     for (let i = 0; i < numLines; i++) {
//       lines.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         length: Math.random() * 100 + 50,
//         speed: Math.random() * 2 + 1,
//         opacity: Math.random() * 0.5 + 0.2,
//       });
//     }

//     function animate() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       lines.forEach((line) => {
//         const dx = line.x - mouse.current.x;
//         const dy = line.y - mouse.current.y;
//         const distance = Math.sqrt(dx * dx + dy * dy);

//         // Apply a hover effect: lines near the mouse will brighten and slightly shift
//         if (distance < 150) {
//           line.opacity = 1; // Brighten lines near the cursor
//           line.x += dx * 0.02;
//           line.y += dy * 0.02;
//         } else {
//           line.opacity = Math.random() * 0.5 + 0.2;
//         }

//         ctx.beginPath();
//         ctx.moveTo(line.x, line.y);
//         ctx.lineTo(line.x, line.y + line.length);
//         ctx.strokeStyle = `rgba(255, 255, 255, ${line.opacity})`;
//         ctx.lineWidth = 1;
//         ctx.stroke();

//         line.y += line.speed;
//         if (line.y > canvas.height) {
//           line.y = -line.length;
//         }
//       });

//       requestAnimationFrame(animate);
//     }

//     animate();

//     const handleMouseMove = (event) => {
//       mouse.current.x = event.clientX;
//       mouse.current.y = event.clientY;
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("resize", () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     });

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-gray-900 flex justify-center items-center text-white">
//       <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
//       <div className="relative z-10 text-center">
//         <h1 className="text-5xl font-bold">Welcome to Our Landing Page</h1>
//         <p className="mt-4 text-lg opacity-80">
//           A smooth parallax background effect with hover interaction.
//         </p>
//       </div>
//     </div>
//   );
// }




import { useEffect, useRef } from "react";

export default function LandingPage1() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let lines = [];
    const numLines = 70;

    for (let i = 0; i < numLines; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 120 + 50,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.6 + 0.2,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      lines.forEach((line) => {
        const dx = line.x - mouse.current.x;
        const dy = line.y - mouse.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Brighten and shift lines when the mouse is near
        if (distance < 120) {
          line.opacity = 1;
          line.x += dx * 0.02;
          line.y += dy * 0.02;
        } else {
          line.opacity = Math.random() * 0.5 + 0.2;
        }

        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x, line.y + line.length);
        ctx.strokeStyle = `rgba(0, 255, 0, ${line.opacity})`; // Neon green
        ctx.lineWidth = 1.5;
        ctx.stroke();

        line.y += line.speed;
        if (line.y > canvas.height) {
          line.y = -line.length;
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleMouseMove = (event) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
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
    <div className="relative w-full h-screen overflow-hidden bg-black flex justify-center items-center text-green-400">
      {/* Matrix Rain Effect */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />

      {/* Cyber Text Overlay */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-7xl font-bold tracking-widest animate-pulse">
          DIGITAL RAIN
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-green-300 opacity-80">
          The code flows like a river in the matrix.
        </p>
      </div>
    </div>
  );
}
