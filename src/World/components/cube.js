import { BoxGeometry, Mesh, MeshStandardMaterial, TextureLoader } from 'three'

function createMaterial () {
    const textureLoader = new TextureLoader()

    // load a texture
    const texture = textureLoader.load('/assets/textures/uv-test-bw.png')

    const material = new MeshStandardMaterial()

    material.map = texture

    return material
}

function createCube () {
  const geometry = new BoxGeometry(2, 1, 2, 100)
  const material = createMaterial()
  const cube = new Mesh(geometry, material)

  cube.rotation.set(-0.5, -0.1, 0.8)

    cube.position.set(0 ,0, 0)

  // this method will be called once per frame
  cube.tick = () => {
    // increase the cube's rotation each frame
    cube.rotation.z += 0.00
    cube.rotation.x += 0.00
    cube.rotation.y += 0.01
  }

  return cube
}

export { createCube }
