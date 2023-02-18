import { DirectionalLight, AmbientLight, HemisphereLight } from 'three'

function createLights () {
  const ambientLight = new HemisphereLight('white', 'darkslategrey', 3)

  const mainLight = new DirectionalLight('white', 2)

  // move the mainlight right, up, and towards us
  mainLight.position.set(10, 10, 10)
  

  return { ambientLight, mainLight}
}

export { createLights }
