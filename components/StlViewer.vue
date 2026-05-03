<template>
  <div ref="container" class="stl-viewer-container">
    <div v-if="isLoading" class="loading-indicator">
      <div class="spinner"></div>
      <span>Cargando modelo 3D...</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const container = ref(null)
const isLoading = ref(true)
let renderer, scene, camera, controls
let animationFrameId

onMounted(async () => {
  // Code Splitting
  const THREE = await import('three')
  const { STLLoader } = await import('three/examples/jsm/loaders/STLLoader.js')
  const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls.js')

  scene = new THREE.Scene()
  // Fondo transparente para que luzca el glassmorphism
  scene.background = null 

  camera = new THREE.PerspectiveCamera(45, container.value.clientWidth / container.value.clientHeight, 0.1, 1000)
  camera.position.set(0, 0, 50)

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(container.value.clientWidth, container.value.clientHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  container.value.appendChild(renderer.domElement)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.05

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
  scene.add(ambientLight)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
  directionalLight.position.set(10, 20, 10)
  scene.add(directionalLight)

  const loader = new STLLoader()
  
  loader.load('/tulip.stl', (geometry) => {
    const material = new THREE.MeshStandardMaterial({ 
      color: 0x9ca3af, 
      roughness: 0.4, 
      metalness: 0.3 
    })
    
    const mesh = new THREE.Mesh(geometry, material)
    
    geometry.computeBoundingBox()
    geometry.center()
    
    scene.add(mesh)
    isLoading.value = false
  }, undefined, (error) => {
    console.error('Error cargando el archivo STL:', error)
    isLoading.value = false
  })

  const animate = () => {
    animationFrameId = requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }
  animate()
})

onBeforeUnmount(() => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
  if (renderer) renderer.dispose()
})
</script>

<style scoped>
.stl-viewer-container {
  /* Tamaño corregido y garantizado */
  width: 100%;
  max-width: 1000px;
  height: 500px;
  margin: 0 auto;
  
  /* Estética Minimalista SaaS / Glassmorphism */
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  
  /* Flexbox para centrar el loading */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: grab;
}

.stl-viewer-container:active {
  cursor: grabbing;
}

.loading-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  color: #fff;
  opacity: 0.7;
  font-family: sans-serif;
  letter-spacing: 1px;
}

.spinner {
  width: 30px;
  height: 30px;
  border: 3px solid rgba(255, 255, 255, 0.2);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>