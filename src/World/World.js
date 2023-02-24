import { createCamera } from './components/camera.js'
import { createMeshGroup } from './components/meshGroup.js'
import { createScene } from './components/scene.js'
import { createCube } from './components/cube.js'
import { createLights } from './components/lights.js'
import { createAxesHelper, createGridHelper } from './components/helpers.js'
import { loadBirds } from './components/birds/birds.js'

import { createControls } from './systems/controls.js'
import { createRenderer } from './systems/renderer.js'
import { Resizer } from './systems/Resizer.js'
import { Loop } from './systems/Loop.js'
import { Train } from './components/Train/Train.js'

// These variables are module-scoped: we cannot access them
// from outside the module
let camera
let renderer
let scene
let loop
let controls

class World {
  // 1. Create an instance of the World app
  constructor (container) {
    camera = createCamera()
    scene = createScene()
    renderer = createRenderer()
    loop = new Loop(camera, scene, renderer)
    container.append(renderer.domElement)
    controls = createControls(camera, renderer.domElement)

    const { ambientLight, mainLight } = createLights()

     const meshGroup = createMeshGroup()

    const train = new Train()

    const cube = new createCube()

    loop.updatables.push(controls, cube)

    // disable mesh rotation
   //  loop.updatables.push(cube)

    scene.add(mainLight, ambientLight, cube)

     controls.target.copy(cube.position)
     controls.enablePan = false

    // add the helpers to the scene
    scene.add(createAxesHelper(), createGridHelper())

    controls.addEventListener('change', () => {
      this.render()
    })

    const resizer = new Resizer(container, camera, renderer)
  }

  // 2. Render the scene
  render () {
    // draw a single frame
    renderer.render(scene, camera)
  }

  start () {
    loop.start()
  }

  stop () {
    loop.stop()
  }

  async init () {
    // asynchronous setup here
    // load bird models
    // const { parrot, flamingo, stork } = await loadBirds()

    // controls.target.copy(parrot.position)

    // loop.updatables.push(parrot, flamingo,stork)
    // scene.add(parrot, flamingo, stork)
  }
}

export { World }
