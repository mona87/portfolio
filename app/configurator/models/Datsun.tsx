import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { Color } from "three";

export function Datsun(props: any) {
  // @ts-ignore
  const { nodes, materials } = useGLTF("./models/datsun.glb");

  console.log(materials);
  const propertiesToKeep = ["paint", "glass", "black_paint", "black_matte"];
  const newObj: any = {};
  for (const prop of propertiesToKeep) {
    if (materials.hasOwnProperty(prop)) {
      newObj[prop] = materials[prop];
    }
  }
  console.log(newObj);
  useControls("Datsun", () => {
    return Object.keys(newObj).reduce(
      (acc, m) =>
        Object.assign(acc, {
          [m]: {
            // value: "#ffffff",
            value:
              "#" +
              ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0"),
            onChange: (v: string) => {
              materials[m].color = new Color(v);
            },
          },
        }),
      {}
    );
  });
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cylinder007_alloy_0_1.geometry}
        material={materials.alloy}
      />
      <mesh
        geometry={nodes.Cylinder007_alloy_0_2.geometry}
        material={materials.headlights}
      />
      <mesh
        geometry={nodes.Cylinder007_alloy_0_3.geometry}
        material={materials.black_paint}
      />
      <mesh
        geometry={nodes.Cylinder007_alloy_0_4.geometry}
        material={materials.tire}
      />
      <mesh
        geometry={nodes.Cylinder007_alloy_0_5.geometry}
        material={materials.black_matte}
      />
      <mesh
        geometry={nodes.Cylinder007_alloy_0_6.geometry}
        material={materials.chrome}
      />
      <mesh
        geometry={nodes.Cylinder007_alloy_0_7.geometry}
        material={materials.license}
      />
      <mesh
        geometry={nodes.Cylinder007_alloy_0_8.geometry}
        material={materials.orange_glass}
      />
      <mesh
        geometry={nodes.Cylinder007_alloy_0_9.geometry}
        material={materials.glass}
      />
      <mesh
        geometry={nodes.Cylinder007_alloy_0_10.geometry}
        material={materials.paint}
      />
      <mesh
        geometry={nodes.Cylinder007_alloy_0_11.geometry}
        material={materials.red_glass}
      />
      <mesh
        geometry={nodes.Cylinder007_alloy_0_12.geometry}
        material={materials.stickers}
      />
    </group>
  );
}

useGLTF.preload("./models/datsun.glb");
