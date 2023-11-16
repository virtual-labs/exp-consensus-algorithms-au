import React, { Suspense, useEffect, useState } from "react";
import * as THREE from "three";
import { Physics } from "@react-three/cannon";
import { useLoader, Canvas } from "react-three-fiber";
import woodTexture from "../../textures/wood.jpg";
import RoundBox from "../ThreeComponents/Objects/RoundBox";
import { Html, OrbitControls, Text, Text3D } from "@react-three/drei";
import Character from "./Objects/Character";
import Terrain from "./Terrain";
import Loading from "../Loading";
import Table from "./Objects/Table";
import Cupboard from "./cupboard";
import Light from "./Objects/Light";
import Door from "./Objects/Door";

import {
  onClickLeft,
  updateSelectedCardIndex,
  updateUserInteract,
} from "../../redux/slices/BlockChainReducer";
import { useDispatch, useSelector } from "react-redux";
import TableLamp from "./Objects/Table_lamp";
import { objectData } from "../../data/objectData";
import Flower from "./Objects/Flower_in_a_pot";

const intialState = () => {
  return {
    isLeft: false,
    id: 0,
    color: "red",
  };
};

const Scene = () => {
  const [state, setState] = useState(intialState());
  const { id, isLeft, color } = state;
  console.log(state.id);
  const dispatch = useDispatch();
  const { selectedCardIndex, userIntract, ifClickLeft } = useSelector(
    (state) => state.BlockChainReducer
  );
  React.useEffect(() => {
    if (ifClickLeft) {
      const walk = setTimeout(() => {
        setState((prev) => ({
          ...prev,
          id: 1,
        }));
        dispatch(onClickLeft(!ifClickLeft));
      }, 2900);

      return () => {
        clearTimeout(walk);
      };
    }
  }, [ifClickLeft]);

  useEffect(() => {
    if (id > 0 && !ifClickLeft) {
      setState((prev) => ({
        ...prev,
        color: "green",
      }));

      dispatch(updateUserInteract(true));
    }
  }, [id, ifClickLeft]);
  console.log(ifClickLeft);
  return (
    <Canvas
      style={{
        background: "#022027",
        height: "81vh",
        marginTop: 19,
        width: "100%",
      }}
      camera={{ fov: 15, position: [-50, 20, 50] }}
    >
      {/* <Suspense fallback={<Loading />}> */}
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Physics>
        <group position={[-1, 0, 0]}>
          <group position={[0, 0.05, 0]}>
            <spotLight
              color={"white"}
              intensity={50}
              angle={60}
              penumbra={0}
              position={[-1, 1, 9]}
              rotation={[0, 0, 0]}
              castShadow
            />

            <Character isLeft={ifClickLeft} state={state} scale={[3, 3, 3]} />
          </group>
          <Door />
          <Flower position={[-10, -2, -7]} />
          {objectData.map((item, index) => {
            return (
              <group position={[-8, -2, 1]}>
                <group position={[2.1, 0, 1]}>
                  <Table
                    position={item.tablePosition}
                    isSelected={selectedCardIndex.includes(index)}
                  />
                  {item.Board.map((board, index) => {
                    return (
                      <group>
                        <mesh position={board.position}>
                          <boxGeometry args={[4, 1, 0]} />
                          <meshBasicMaterial />
                          <Text
                            position={[0, 0.2, 0.1]}
                            color="black"
                            anchorX="center"
                            anchorY="center"
                            fontSize={0.27}
                            strokeWidth={30}
                          >
                            {board.title}
                          </Text>
                        </mesh>
                      </group>
                    );
                  })}
                  {item.divider.map((divderList) => {
                    return (
                      <group>
                        <mesh key={index} position={divderList.position}>
                          <boxGeometry args={[0.2, 0.1, 5]} />
                          <meshBasicMaterial
                            color={
                              selectedCardIndex.includes(index)
                                ? "green"
                                : "red"
                            }
                          />
                        </mesh>
                      </group>
                    );
                  })}
                </group>
              </group>
            );
          })}
          <Cupboard />

          {[1, 2, 3, 4].map((item) => {
            return <group position={[-8.5, -0.5, 2]}></group>;
          })}
          <Light />
          <Terrain />
        </group>
        <OrbitControls />
        <color args={["#022027"]} attach="background" />
      </Physics>
      {/* </Suspense> */}
    </Canvas>
  );
};

export default Scene;
