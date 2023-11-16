import { useLoader } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";
import woodTexture from "../../textures/wood.jpg";
const Cupboard = () => {
  const wood = useLoader(THREE.TextureLoader, woodTexture);
  return (
    <group>
      <mesh position={[-4.3, 0.5, -3]}>
        <boxGeometry args={[0.1, 5, 5]} />
        <meshStandardMaterial map={wood} />
      </mesh>
      <mesh position={[0.05, 0.5, -3]}>
        <boxGeometry args={[0.1, 5, 5]} />
        <meshStandardMaterial map={wood} />
      </mesh>
      <mesh position={[4.5, 0.5, -3]}>
        <boxGeometry args={[0.1, 5, 5]} />
        <meshStandardMaterial map={wood} />
      </mesh>
    </group>
  );
};

export default Cupboard;
