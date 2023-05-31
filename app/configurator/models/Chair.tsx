
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useControls } from "leva";
import { Color } from "three";

export function Chair(props:any) {
    // @ts-ignore
  const { nodes, materials } = useGLTF('./models/chair.glb')
console.log(materials)
const propertiesToKeep = ['wood Brown','fabric Mystere Mango Velvet'];
const newObj:any = {};
for (const prop of propertiesToKeep) {
  if (materials.hasOwnProperty(prop)) {
    newObj[prop] = materials[prop];
  }
}
console.log(newObj)
  useControls("Shoe", () => {
    return Object.keys(newObj).reduce(
      (acc, m) =>
        Object.assign(acc, {
          [m]: {
            // value: "#ffffff",
            value: "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0'),
            onChange: (v:string) => {
              materials[m].color = new Color(v);
            },
          },
        }),
      {}
    );
  });
  
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.SheenChair_fabric.geometry} material={materials['fabric Mystere Mango Velvet']} />
      <mesh geometry={nodes.SheenChair_wood.geometry} material={materials['wood Brown']} />
      {/* <mesh geometry={nodes.SheenChair_metal.geometry} material={materials.metal} />
      <mesh geometry={nodes.SheenChair_label.geometry} material={materials.label} position={[0, 0.24, 0.06]} rotation={[-0.09, 0, 0]} /> */}
    </group>
  )
}

useGLTF.preload('./models/chair.glb')
