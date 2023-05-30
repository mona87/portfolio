"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LogoPicker from "./components/logoPicker";
import Image from "next/image";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {Model } from "./models/Shoe";

const Page = () => {

  return (
    <div className="shoe">
    <Canvas>
        <Environment preset="sunset" />
        <Model/>
        <ContactShadows position={[0, -3.2, 0]} rotation={[-Math.PI / 2, 0, 0]} opacity={0.25} width={10} height={10} blur={1} far={9} />
        <OrbitControls autoRotate />
    </Canvas>
    </div>

 
  );
};

export default Page;
