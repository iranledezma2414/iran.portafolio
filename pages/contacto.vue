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
        <div v-if="statusMsg" :class="['status-banner', statusType]">
          {{ statusMsg }}
        </div>

        <form @submit.prevent="enviarMensaje" class="contact-form">
          <div class="input-group">
            <label for="nombre">Nombre</label>
            <input v-model="formData.nombre" type="text" id="nombre" placeholder="¿Cómo te llamas?" required />
          </div>

          <div class="input-group">
            <label for="email">Correo Electrónico</label>
            <input v-model="formData.correo" type="email" id="email" placeholder="tu@email.com" required />
          </div>

          <div class="input-group">
            <label for="telefono">Teléfono</label>
            <input v-model="formData.telefono" type="tel" id="telefono" placeholder="55 1234 5678" required />
          </div>

          <div class="input-group">
            <label for="proyecto">Proyecto</label>
            <textarea v-model="formData.proyecto" id="proyecto" rows="4" placeholder="Cuéntame sobre tu proyecto..." required></textarea>
          </div>

          <button type="submit" class="btn-submit" :disabled="loading">
            <span v-if="!loading">Enviar Mensaje <i class="fas fa-paper-plane"></i></span>
            <span v-else>Enviando... <i class="fas fa-spinner fa-spin"></i></span>
          </button>
        </form>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Estado del formulario
const formData = ref({
  nombre: '',
  correo: '',
  telefono: '',
  proyecto: ''
});

const loading = ref(false);
const statusMsg = ref('');
const statusType = ref('');

const enviarMensaje = async () => {
  loading.value = true;
  statusMsg.value = '';
  
  try {
    // Llama a la API interna de Nuxt
    await $fetch('/api/contact', {
      method: 'POST',
      body: formData.value
    });

    statusMsg.value = '¡Datos enviados correctamente a Google Sheets!';
    statusType.value = 'success';
    
    // Limpiar formulario
    formData.value = { nombre: '', correo: '', telefono: '', proyecto: '' };
  } catch (error) {
    statusMsg.value = 'Error al enviar los datos. Intenta de nuevo.';
    statusType.value = 'error';
  } finally {
    loading.value = false;
    // Ocultar mensaje después de 5 segundos
    setTimeout(() => statusMsg.value = '', 5000);
  }
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
  background: linear-gradient(45deg, var(--dot-1, #00ffcc), var(--dot-2, #0077ff));
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
  grid-template-columns: 1fr 1.5fr;
  gap: 30px;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}

/* PANELES DE CRISTAL */
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

/* INFORMACIÓN */
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
  color: var(--dot-2, #0077ff);
  font-size: 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.details h4 { margin: 0 0 5px; font-size: 0.9rem; opacity: 0.7; text-transform: uppercase; letter-spacing: 1px; }
.details span { font-weight: 600; font-size: 1.05rem; }

/* REDES SOCIALES */
.social-links { display: flex; gap: 15px; }
.social-icon {
  width: 40px; height: 40px; border-radius: 50%;
  background: rgba(255, 255, 255, 0.1); color: var(--text-primary, white);
  display: flex; align-items: center; justify-content: center;
  text-decoration: none; border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}
.social-icon:hover { background: var(--dot-2, #0077ff); color: #000; transform: translateY(-3px); }

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

.input-group input,
.input-group textarea {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 12px 15px;
  color: var(--text-primary, white);
  font-size: 1rem;
  transition: all 0.3s ease;
}

.input-group input:focus,
.input-group textarea:focus {
  outline: none;
  border-color: var(--dot-2, #0077ff);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 0 3px rgba(0, 119, 255, 0.2);
}

/* BOTÓN Y ESTADOS */
.btn-submit {
  margin-top: 10px;
  padding: 15px;
  border-radius: 12px;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  background: linear-gradient(45deg, var(--dot-1, #00ffcc), var(--dot-2, #0077ff));
  color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.btn-submit:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.btn-submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.status-banner {
  padding: 12px;
  border-radius: 12px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
}

.success { background: rgba(0, 255, 127, 0.15); color: #00ff7f; border: 1px solid rgba(0, 255, 127, 0.3); }
.error { background: rgba(255, 69, 58, 0.15); color: #ff453a; border: 1px solid rgba(255, 69, 58, 0.3); }
</style>