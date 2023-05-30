import React from 'react';
import { Canvas } from '@react-three/fiber';

const Scene: React.FC = () => {
  return (
    <Canvas>
      <ambientLight />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="red" />
      </mesh>
    </Canvas>
  );
};

export default Scene;
