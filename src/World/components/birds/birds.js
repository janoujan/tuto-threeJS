import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import { setupModel } from './setupModel'

async function loadBirds () {
  const loader = new GLTFLoader()

  const [parrotData, flamingoData, storkData] = await Promise.all([
    loader.loadAsync('/assets/models/Parrot.glb'),
    loader.loadAsync('/assets/models/Flamingo.glb'),
    loader.loadAsync('/assets/models/Stork.glb'),
  ])

  console.log('Squaaawk!', parrotData)

  const parrot = setupModel(parrotData)
  parrot.position.set(0, 2.5, 2.5)

  const flamingo = setupModel(flamingoData)
  flamingo.position.set(2.5, 2.5, -5)

  const stork = setupModel(storkData)
    stork.position.set(-3, 2.5, 0)


  return { parrot, flamingo, stork }
}

export { loadBirds }
