import { Canvas } from '@react-three/fiber'
import { Center, AccumulativeShadows, RandomizedLight, Environment, OrbitControls, PerspectiveCamera, ContactShadows } from '@react-three/drei'
import { useControls, button } from 'leva'
import { Model } from './Datsun'
import { Effects } from './Effects'
import { Suspense } from 'react'

export default function App() {
  const { color, realism, importanceSampling } = useControls({
    color: '#ff9621',
    realism: true,
    importanceSampling: true,
    screenshot: button(() => {
      const link = document.createElement('a')
      link.setAttribute('download', 'canvas.png')
      link.setAttribute('href', document.querySelector('canvas').toDataURL('image/png').replace('image/png', 'image/octet-stream'))
      link.click()
    })
  })
  return (
    <Canvas gl={{ antialias: false, preserveDrawingBuffer: true, toneMappingExposure: 0.7 }} shadows camera={{ position: [4, 0, 6], fov: 35 }}>
      <Suspense fallback={null}>
        <group position={[0, -0.75, 0]}>
          <spotLight angle={1} position={[-80, 200, -100]} intensity={1} />
          <Center top>
            <Model color={color} position={[-8, 0, -2]} scale={20} rotation-y={-Math.PI / 4} />
          </Center>
          <AccumulativeShadows>
            <RandomizedLight position={[2, 5, 5]} />
            <ContactShadows renderOrder={2} frames={1} resolution={1024} scale={120} blur={2} opacity={0.6} far={100} />
          </AccumulativeShadows>
        </group>
      </Suspense>

      <OrbitControls enableZoom={false} enablePan={false} makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
      <PerspectiveCamera makeDefault position={[-30, 100, 120]} fov={35} />
      {realism && <Effects importanceSampling={importanceSampling} />}
      <Environment files="/old_depot_2k.hdr" blur={1} ground={{ height: 32, radius: 130 }} />
    </Canvas>
  )
}
