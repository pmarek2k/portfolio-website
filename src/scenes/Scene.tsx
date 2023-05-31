import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import { folder, useControls } from 'leva';

const Scene: React.FC = () => {
  const {boxScale, boxRotation, boxPosition,
    materialColor, materialMetalness, materialRoughness, materialEmissive} = useControls('Controls', {
      'scale, rotation, position': folder({
        boxScale: {value: [1, 1, 1], min: 0.01, step: 0.01}, 
        boxRotation: {value: [0.4, 0.2, 0.0], step: 0.01},
        boxPosition: {value: [0, 0, 0], step: 0.01}
      }),
      'Material': folder({
        materialColor: "#ffffff",
        materialMetalness: {value: 0.5, min: 0, max: 1},
        materialRoughness: {value: 0.5, min: 0, max: 1},
        materialEmissive: {value: 0.5, min: 0, max: 1}
      })
    })

  return (
    <Canvas style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
      <ambientLight />
      <pointLight position={[0, 1, 0]} />
      <Box scale={boxScale} rotation={boxRotation} position={boxPosition}>
        <meshPhysicalMaterial color={materialColor} metalness={materialMetalness} roughness={materialRoughness} emissive={materialEmissive} />
      </Box>
    </Canvas>
  );
};

export default Scene;