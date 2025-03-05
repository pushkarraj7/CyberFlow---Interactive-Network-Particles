// import { useEffect, useState } from "react";

// export default function Cursor() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const updateCursor = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", updateCursor);
//     return () => window.removeEventListener("mousemove", updateCursor);
//   }, []);

//   return (
//     <div
//       className="fixed top-0 left-0 w-6 h-6 border-2 border-white rounded-full pointer-events-none transition-transform duration-150 ease-out"
//       style={{
//         transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
//       }}
//     />
//   );
// }




import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-6 h-6 border-2 border-white rounded-full pointer-events-none transition-transform duration-150 ease-out"
      style={{
        transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
      }}
    />
  );
}
