<template>
  <div class="page-container">
    <div class="contact-header">
      <h1 class="page-title">Ponte en <span>Contacto</span> 📬</h1>
      <p class="page-subtitle">¿Tienes un proyecto en mente o necesitas un desarrollador freelance? ¡Hablemos!</p>
    </div>

    <div class="contact-content">
      
      <div class="glass-panel info-panel">
        <h3>Información Directa</h3>
        <p class="info-desc">
          Actualmente estoy disponible para nuevos proyectos freelance, colaboraciones o para integrarme a un equipo de desarrollo.
        </p>
        
        <div class="info-items">
          <div class="item">
            <div class="icon-box"><i class="fas fa-envelope"></i></div>
            <div class="details">
              <h4>Email</h4>
              <span>iranledezma65@gmail.com</span> 
            </div>
          </div>
          
          <div class="item">
            <div class="icon-box"><i class="fas fa-map-marker-alt"></i></div>
            <div class="details">
              <h4>Ubicación</h4>
              <span>Estado de México, México</span>
            </div>
          </div>
        </div>

        <h4 class="social-title">Mis Redes</h4>
        <div class="social-links">
          <a href="#" class="social-icon" title="GitHub"><i class="fab fa-github"></i></a>
          <a href="#" class="social-icon" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>

      <div class="glass-panel form-panel">
        <form @submit.prevent="enviarMensaje" class="contact-form">
          <div class="input-group">
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" placeholder="¿Cómo te llamas?" required />
          </div>

          <div class="input-group">
            <label for="email">Correo Electrónico</label>
            <input type="email" id="email" placeholder="tu@email.com" required />
          </div>

          <div class="input-group">
            <label for="mensaje">Mensaje</label>
            <textarea id="mensaje" rows="4" placeholder="Cuéntame sobre tu proyecto..." required></textarea>
          </div>

          <button type="submit" class="btn-submit">
            Enviar Mensaje <i class="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>

    </div>
  </div>
</template>

<script setup>
// Aquí más adelante conectaremos el formulario a un servicio real (como Formspree o EmailJS)
const enviarMensaje = () => {
  alert('¡Formulario de prueba! Más adelante lo conectaremos para que envíe correos reales.');
}
</script>

<style scoped>
/* CONTENEDOR PRINCIPAL */
.page-container {
  min-height: 100vh;
  padding: 130px 20px 50px;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* ENCABEZADOS */
.contact-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-title {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.page-title span {
  background: linear-gradient(45deg, var(--dot-1), var(--dot-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-subtitle {
  font-size: 1.1rem;
  opacity: 0.8;
}

/* ESTRUCTURA DE COLUMNAS */
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr; /* El formulario ocupa un poco más de espacio */
  gap: 30px;
}

/* Responsive: Una columna en celulares */
@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}

/* PANELES DE CRISTAL (Reutilizando el estilo) */
.glass-panel {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
}

:global(.light) .glass-panel {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

/* ESTILOS DE INFORMACIÓN */
.info-panel h3 { margin-top: 0; font-size: 1.5rem; }
.info-desc { opacity: 0.8; line-height: 1.6; margin-bottom: 25px; }

.info-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
}

.item {
  display: flex;
  align-items: center;
  gap: 15px;
}

.icon-box {
  width: 45px;
  height: 45px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--dot-2);
  font-size: 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

:global(.light) .icon-box { background: rgba(0,0,0,0.05); border-color: rgba(0,0,0,0.1); color: var(--dot-3); }

.details h4 { margin: 0 0 5px; font-size: 0.9rem; opacity: 0.7; text-transform: uppercase; letter-spacing: 1px; }
.details span { font-weight: 600; font-size: 1.05rem; }

/* REDES SOCIALES (Mismo estilo de tu tarjeta) */
.social-title { margin: 0 0 15px; font-size: 1.1rem; }
.social-links { display: flex; gap: 15px; }
.social-icon {
  width: 40px; height: 40px; border-radius: 50%;
  background: rgba(255, 255, 255, 0.1); color: var(--text-primary);
  display: flex; align-items: center; justify-content: center;
  text-decoration: none; border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}
.social-icon:hover { background: var(--dot-2); color: #000; transform: translateY(-3px); }
:global(.light) .social-icon { background: rgba(0,0,0,0.05); border-color: rgba(0,0,0,0.1); }

/* ESTILOS DEL FORMULARIO */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-group label {
  font-size: 0.9rem;
  font-weight: 600;
  opacity: 0.9;
  margin-left: 5px;
}

/* Inputs y Textarea de Cristal */
.input-group input,
.input-group textarea {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 12px 15px;
  color: var(--text-primary);
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
}

:global(.light) .input-group input,
:global(.light) .input-group textarea {
  background: rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.input-group input:focus,
.input-group textarea:focus {
  outline: none;
  border-color: var(--dot-2);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 0 3px rgba(0, 255, 204, 0.2);
}

.input-group textarea { resize: vertical; min-height: 120px; }

/* BOTÓN DE ENVIAR */
.btn-submit {
  margin-top: 10px;
  padding: 15px;
  border-radius: 12px;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  background: linear-gradient(45deg, var(--dot-1), var(--dot-2));
  color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  opacity: 0.9;
}
</style>