// import React, { useRef } from "react";
// import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";

// const Cube = () => {
//   const textRef = useRef();
//   useFrame(
//     (state) =>
//       (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
//   );
//   return (
//     <mesh>
//       <boxGeometry />
//       <meshStandardMaterial>
//         <RenderTexture attach="map">
//           <PerspectiveCamera makeDefault position={[0, 0, 5]} />
//           <color attach="background" args={["#dc9dcd"]} />
//           <Text ref={textRef} fontSize={3} color="#555">
//             hello
//           </Text>
//         </RenderTexture>
//       </meshStandardMaterial>
//     </mesh>
//   );
// };

// export default Cube;
import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import imagePath from '../img/IMG_0364.jpg'; // Adjust the path according to where you move the image

const Cube = () => {
  // Load the image as a texture
  const texture = useLoader(TextureLoader, imagePath);

  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} /> {/* Define the size of the cube */}
      <meshStandardMaterial map={texture} /> {/* Apply the texture here */}
    </mesh>
  );
};

export default Cube;

