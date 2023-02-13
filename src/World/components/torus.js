import { TorusGeometry, Mesh, MeshBasicMaterial } from "three"

function createTorus () {
    const geometry = new TorusGeometry( 2, 1, 2, 100)
    const material = new MeshBasicMaterial( { color: 0xffff00 })
    const torus = new Mesh(geometry, material)
    return torus
}

export { createTorus }