"use client"

import React from 'react'
import { useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Planet(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/models/planet.glb')
  const { actions } = useAnimations(animations, group)
 
    useEffect(() => {
    if (actions && animations.length > 0) {
      const firstAnimation = animations[0].name;
      actions[firstAnimation]?.play();
    }
  }, [actions, animations])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-1.54, -0.064, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Clouds_1">
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.Clouds} />
              </group>
              <group name="Planet_2">
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.Planet} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/planet.glb')