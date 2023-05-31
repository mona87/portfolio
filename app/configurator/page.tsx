"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LogoPicker from "./components/logoPicker";
import Image from "next/image";
import { ContactShadows, Environment, OrbitControls, PresentationControls, Stage, MeshReflectorMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Porsche } from "./models/Porsche";
import { Car911 } from "./models/Car911";
import { Datsun } from "./models/Datsun";

const Page = () => {

  const [currentCar, setCurrentCar] = useState(<Car911/>);


  const handleSelection = (type: string) => {
    switch(type){
      case 'datsun':
        setCurrentCar(<Datsun/>)
        break;
      case 'car911':
        setCurrentCar(<Car911/>)
        break;
        default: 
        setCurrentCar(<Car911/>)
    }
  }

  return (
    <div className="shoe">
      <button onClick={()=> handleSelection('datsun')}>Datsun</button>
      <button onClick={()=> handleSelection('car911')}>911</button>

    <Canvas>
    <PresentationControls speed={1.5} global zoom={0.7} polar={[-0.1, Math.PI / 4]}>
          <Stage environment={undefined} intensity={1} >
          {currentCar}
          </Stage>
          </PresentationControls>
        <Environment preset="forest" />
          <ContactShadows position={[0, -3.2, 0]} rotation={[-Math.PI / 2, 0, 0]} opacity={0.25} width={10} height={10} blur={1} far={9} />
        {/* <OrbitControls makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2}  /> */}
        
    </Canvas>
    </div>

 
  );
};

export default Page;
