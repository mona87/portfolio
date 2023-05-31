"use client";

import React, { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { Color } from "three";

export function Shoe(props: any) {
  const [hover, setHover] = useState(false);
  // @ts-ignore
  const { nodes, materials } = useGLTF("./models/shoe-draco.glb");

  useControls("Shoe", () => {
    return Object.keys(materials).reduce(
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
    <group
      {...props}
      dispose={null}
      onPointerOver={() => setHover(true)}
      onPointerDown={() => setHover(false)}
      onClick={(e) => {
        e.stopPropagation()
        console.log(document.getElementById(`Shoe. ${(e.object as any).material.name}`))
      //  document.getElementById(`Shoe. ${(e.object as any).material.name}`)?.focus()
    
      }}
    >
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} />
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} />
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} />
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} />
    </group>
  );
}

useGLTF.preload("./models/shoe-draco.glb");
