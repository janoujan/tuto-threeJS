import { Color, Scene } from 'three'

function createScene () {
  const scene = new Scene()

  scene.background = new Color('darkturquoise')

  return scene
}

export { createScene }
