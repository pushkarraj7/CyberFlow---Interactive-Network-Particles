// import { Link } from "react-router-dom";

// export default function AllLandingPages() {
//   const pages = [
//     { path: "/landing1", name: "Landing Page 1" },
//     { path: "/landing2", name: "Landing Page 2" },
//     { path: "/landing3", name: "Landing Page 3" },
//     { path: "/landing4", name: "Landing Page 4" },
//     { path: "/landing5", name: "Landing Page 5" },
//     { path: "/landing6", name: "Landing Page 6" },
//     { path: "/landing7", name: "Landing Page 7" },
//     { path: "/landing8", name: "Landing Page 8" },
//     { path: "/landing9", name: "Landing Page 9" },
//     { path: "/landing10", name: "Landing Page 10" },
//     { path: "/landing11", name: "Landing Page 11" },
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
//       <h1 className="text-4xl font-bold mb-6">Select a Landing Page</h1>
//       <div className="grid grid-cols-2 gap-4">
//         {pages.map((page, index) => (
//           <Link
//             key={index}
//             to={page.path}
//             className="px-6 py-3 bg-gray-800 rounded hover:bg-gray-600 transition"
//           >
//             {page.name}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }




import { Link } from "react-router-dom";
import { useState } from "react";

export default function AllLandingPages() {
  const pages = [
    { path: "/landing1", name: "Landing Page 1" },
    { path: "/landing2", name: "Landing Page 2" },
    { path: "/landing3", name: "Landing Page 3" },
    { path: "/landing4", name: "Landing Page 4" },
    { path: "/landing5", name: "Landing Page 5" },
    { path: "/landing6", name: "Landing Page 6" },
    { path: "/landing7", name: "Landing Page 7" },
    { path: "/landing8", name: "Landing Page 8" },
    { path: "/landing9", name: "Landing Page 9" },
    { path: "/landing10", name: "Landing Page 10" },
    { path: "/landing11", name: "Landing Page 11" },
    { path: "/landing12", name: "Landing Page 12" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-4xl font-bold mb-6 animate-pulse text-cyan-400">
        Select a Landing Page
      </h1>
      <div className="grid grid-cols-2 gap-6">
        {pages.map((page, index) => (
          <Link
            key={index}
            to={page.path}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`relative px-6 py-3 rounded-lg text-lg font-semibold 
                        transition-all duration-300 ease-in-out transform 
                        ${
                          hoveredIndex === index
                            ? "bg-cyan-500 scale-105 shadow-lg shadow-cyan-400/50"
                            : "bg-gray-800 hover:bg-cyan-600"
                        }`}
          >
            {page.name}
            {hoveredIndex === index && (
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-1 w-10 bg-cyan-400 rounded-full animate-bounce"></span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
