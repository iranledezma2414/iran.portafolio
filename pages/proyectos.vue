<template>
  <div class="page-container">
    <h1 class="page-title">Mis <span>Proyectos</span> 🚀</h1>
    <p class="page-subtitle">Una selección de mis trabajos en desarrollo, investigación y diseño web.</p>

    <section class="featured-3d-section">
      <div class="featured-header">
        <h2>Visualizador 3D Interactivo</h2>
        <p>Tarea 1 Tema 4: Implementación de Code Splitting y Lazy Loading en Nuxt 3.</p>
      </div>
      
      
      <LazyStlViewer />
    </section>

    
    <div class="section-divider"></div>

    <div class="projects-grid">
      
      <!-- PROYECTO 1 -->
      <article class="project-card">
        <div class="project-content">
          <div class="project-tags">
            <span class="tag">Mobile</span>
            <span class="tag">Biometría</span>
          </div>
          <h3>Integración de Biometría Dactilar en Sistemas de Pago Móvil</h3>
          <p>
            Proyecto de investigación enfocado en mejorar la seguridad y la experiencia del usuario 
            al implementar autenticación por huella dactilar en transacciones financieras móviles.
          </p>
          <div class="project-links">
            <a href="#" class="link-btn"><i class="fab fa-github"></i> Código</a>
            <a href="#" class="link-btn outline">Ver detalles</a>
          </div>
        </div>
      </article>

      <!-- PROYECTO 2 -->
      <article class="project-card">
        <div class="project-content">
          <div class="project-tags">
            <span class="tag">Investigación</span>
            <span class="tag">Innovación</span>
          </div>
          <h3>Alternativa Saludable: Tortillas de Champiñones Deshidratados</h3>
          <p>
            Desarrollo de un proyecto de investigación alimentaria para crear una alternativa 
            nutricional a la tortilla tradicional, utilizando las propiedades de los champiñones.
          </p>
          <div class="project-links">
            <a href="#" class="link-btn outline">Ver investigación</a>
          </div>
        </div>
      </article>

      <!-- PROYECTO 3 -->
      <article class="project-card">
        <div class="project-content">
          <div class="project-tags">
            <span class="tag">Desarrollo</span>
            <span class="tag">Investigación</span>
          </div>
          <h3>Desarrollo de aplicación con IA para reconocimiento temprano de cancer de piel mediante imagenes</h3>
          <p>
            Plataforma web minimalista y moderna construida con Nuxt 3. 
            Implementa diseño Glassmorphism, animaciones CSS avanzadas y soporte dinámico para Modo Claro/Oscuro.
          </p>
          <div class="project-links">
            <a href="#" class="link-btn"><i class="fab fa-github"></i> Repositorio</a>
          </div>
        </div>
      </article>

    </div>
  </div>
</template>

<style scoped>
/* CONTENEDOR DE LA PÁGINA */
.page-container {
  min-height: 100vh;
  padding: 130px 20px 50px;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* TÍTULOS PRINCIPALES */
.page-title {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 0.5rem;
}

.page-title span {
  background: linear-gradient(45deg, var(--dot-1), var(--dot-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-subtitle {
  text-align: center;
  font-size: 1.1rem;
  opacity: 0.8;
  margin-bottom: 3rem;
}

/* --- NUEVOS ESTILOS PARA LA SECCIÓN 3D --- */
.featured-3d-section {
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.featured-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.featured-header h2 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.featured-header p {
  font-size: 1rem;
  opacity: 0.7;
}

.section-divider {
  height: 1px;
  width: 100%;
  background: rgba(150, 150, 150, 0.2);
  margin: 3rem 0;
}
/* ----------------------------------------- */

/* CUADRÍCULA (GRID) */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

/* TARJETAS DE CRISTAL PARA PROYECTOS */
.project-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

:global(.light) .project-card {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
}

:global(.light) .project-card:hover {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  border-color: rgba(0, 0, 0, 0.2);
}

.project-content {
  padding: 25px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

/* ETIQUETAS Y TEXTO */
.project-tags {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.tag {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 4px 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  color: var(--dot-2);
}

:global(.light) .tag {
  background: rgba(0, 0, 0, 0.05);
  color: var(--dot-3);
}

.project-card h3 {
  font-size: 1.4rem;
  margin: 0 0 15px;
  line-height: 1.3;
}

.project-card p {
  font-size: 0.95rem;
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 25px;
  flex-grow: 1;
}

/* BOTONES DE LA TARJETA */
.project-links {
  display: flex;
  gap: 15px;
  margin-top: auto;
}

.link-btn {
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s;
  color: white;
  background: linear-gradient(45deg, var(--dot-1), var(--dot-2));
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.link-btn.outline {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--dot-2);
}

.link-btn:hover {
  transform: scale(1.05);
  opacity: 0.9;
}
</style>