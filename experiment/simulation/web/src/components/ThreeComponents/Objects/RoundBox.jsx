import React from "react";
import { useBox } from "@react-three/cannon";
import { RoundedBox } from "@react-three/drei";
import { useLoader } from "react-three-fiber";
import * as THREE from "three";
import img from "../../../textures/tiles.jpg";
function Round(props) {
  const texture = useLoader(THREE.TextureLoader, img);
  const [ref] = useBox(() => ({
    mass: 20,
    ...props,
    onCollide: (e) => {
      console.log(e);
    },
  }));

  return (
    <group>
      <spotLight
        color={props.spotlightColor}
        position={[10, 15, 10]}
        intensity={100}
        penumbra={1}
      />
      <RoundedBox ref={ref} args={[2, 0.1, 2.5]} radius={0.06}>
        <meshLambertMaterial
          map={texture}
          attach="material"
          color={props.spotlightColor}
        />
      </RoundedBox>
    </group>
  );
}

export default Round;
