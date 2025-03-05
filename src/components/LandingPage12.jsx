import { useEffect, useRef } from "react";

export default function LandingPage14() {
  const svgRef = useRef(null);

  useEffect(() => {
    const paths = svgRef.current.querySelectorAll("path");
    paths.forEach((path, index) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      setTimeout(() => {
        path.style.animation = `draw 2s ease-in-out forwards ${index * 0.3}s, glow 1.5s infinite alternate`;
      }, index * 300);
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <svg
        ref={svgRef}
        width="600"
        height="400"
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Circuit Paths */}
        <path d="M50 100 H150 V200 H250" />
        <path d="M100 150 H200 V250 H300" />
        <path d="M200 50 V150 H350" />
        <path d="M400 200 H500 V100" />
      </svg>

      {/* CSS for Glow and Animation */}
      <style>
        {`
          svg path {
            stroke: #0ff; /* Neon Cyan */
            stroke-width: 3;
            fill: none;
            stroke-linecap: round;
            stroke-linejoin: round;
          }

          @keyframes draw {
            to {
              stroke-dashoffset: 0;
            }
          }

          @keyframes glow {
            from {
              stroke: #0ff;
              filter: drop-shadow(0 0 5px #0ff);
            }
            to {
              stroke: #00f;
              filter: drop-shadow(0 0 10px #00f);
            }
          }
        `}
      </style>
    </div>
  );
}
