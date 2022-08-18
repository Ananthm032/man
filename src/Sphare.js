import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei/useGLTF";

import { useAnimations } from "@react-three/drei/useAnimations";

export default function Model(props) {
  const [leftRight, setLeftRight] = useState(false);
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/animated-sphere.glb");
  const { actions } = useAnimations(animations, group);
  console.log(actions);
  useEffect(() => {
    if (leftRight) {
      actions.LeftRight.play();
      actions.UpDown.stop();
    } else {
      actions.UpDown.play();
      actions.LeftRight.stop();
    }
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        onClick={() => setLeftRight(!leftRight)}
        name="Sphere"
        material={materials["Red Shiny"]}
        geometry={nodes.Sphere.geometry}
      />
    </group>
  );
}

useGLTF.preload("/animated-sphere.glb");
