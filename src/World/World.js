import { createCamera } from './components/camera.js'
import { createCube } from './components/cube.js'
import { createScene } from './components/scene.js'
import { createTorus } from './components/torus.js'

import { createRenderer } from './systems/renderer.js'
import { Resizer } from './systems/Resizer.js'

// These variables are module-scoped: we cannot access them
// from outside the module
let camera
let renderer
let scene

class World {
  // 1. Create an instance of the World app
  constructor (container) {
    camera = createCamera()
    scene = createScene()
    renderer = createRenderer()
    container.append(renderer.domElement)

    const cube = createCube()

    scene.add(cube)

    const torus = createTorus()

    scene.add(torus)

    torus.position.y = 1
    torus.position.x = 1

    const resizer = new Resizer(container, camera, renderer)
  }

  // 2. Render the scene
  render () {
    // draw a single frame
    renderer.render(scene, camera)
  }
}

export { World }
