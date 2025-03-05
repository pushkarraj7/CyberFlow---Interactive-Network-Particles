// import { useEffect, useRef } from "react";
// import * as THREE from "three";

// export default function LandingPage10() {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     // Scene setup
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 3;

//     // Renderer
//     const renderer = new THREE.WebGLRenderer({ alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mountRef.current.appendChild(renderer.domElement);

//     // Sphere Geometry
//     const geometry = new THREE.SphereGeometry(1.5, 32, 32);
//     const textureLoader = new THREE.TextureLoader();
    
//     // Load texture with code pattern
//     const texture = textureLoader.load("https://i.imgur.com/NJYD2S4.png"); // Sample code texture
//     const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
//     const sphere = new THREE.Mesh(geometry, material);
//     scene.add(sphere);

//     // Animation
//     function animate() {
//       requestAnimationFrame(animate);
//       sphere.rotation.y += 0.005; // Rotating the sphere
//       renderer.render(scene, camera);
//     }
//     animate();

//     // Resize Handling
//     function handleResize() {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     }
//     window.addEventListener("resize", handleResize);

//     return () => {
//       mountRef.current.removeChild(renderer.domElement);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return <div ref={mountRef} className="w-full h-screen bg-black"></div>;
// }



import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import textureimage from "../assets/texture-image.png"; // Ensure this file exists in assets

export default function LandingPage10() {
  const mountRef = useRef(null);
  const [loading, setLoading] = useState(true); // Loading state for texture

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Sphere Geometry
    const geometry = new THREE.SphereGeometry(1.5, 32, 32);
    const sphere = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0x111111 }));
    scene.add(sphere);

    // Texture Loader
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      textureimage,
      (texture) => {
        sphere.material = new THREE.MeshBasicMaterial({ map: texture });
        setLoading(false); // Hide loading once the texture is applied
      },
      undefined,
      (error) => console.error("Texture loading error:", error)
    );

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.005; // Smooth rotation
      renderer.render(scene, camera);
    }
    animate();

    // Resize Handling
    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={mountRef} className="w-full h-screen bg-black flex items-center justify-center relative">
      {loading && (
        <div className="absolute text-white text-xl font-bold">Loading 3D Sphere...</div>
      )}
    </div>
  );
}
