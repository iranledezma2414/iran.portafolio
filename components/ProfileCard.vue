<template>
  <div class="hero-container">
    <div class="glass-card">
      
      <div class="profile-photo">
        <img src="\img\iran.png" alt="Irán Ledezma" />
      </div>

      <h1 class="title">Hola, soy <span>Irán</span> 👋</h1>
      <h2 class="subtitle">Ingeniero en TIC | Full-Stack & Data Science</h2>

      <p class="bio">
        A punto de graduarme y apasionado por construir experiencias web rápidas y escalables. 
        Tengo experiencia desarrollando con el ecosistema moderno de JavaScript y un diplomado 
        en Ciencia de Datos. Actualmente busco proyectos freelance desafiantes donde pueda 
        aportar valor desde el día uno.
      </p>

      <div class="skills">
        <span class="skill-tag">HTML / CSS / JS</span>
        <span class="skill-tag">Nuxt 3</span>
        <span class="skill-tag">Next.js</span>
        <span class="skill-tag">Python</span>
        <span class="skill-tag">Machine Learning</span>
      </div>

      <div class="cta-buttons">
        <NuxtLink to="/contacto" class="btn-primary">
          Hablemos <i class="fas fa-paper-plane" style="margin-left: 5px;"></i>
        </NuxtLink>
        
        <a href="/cv-iran-ledezma.pdf" download="CV_Iran_Ledezma.pdf" class="btn-secondary">
          Descargar CV <i class="fas fa-file-download" style="margin-left: 5px;"></i>
        </a>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Contenedor para centrar la tarjeta */
.hero-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Que ocupe toda la pantalla */
  padding: 120px 20px 20px; /* ADELANTE: 120px de espacio arriba */
  position: relative;
  z-index: 1; 
}
/* EFECTO CRISTAL (Glassmorphism) */
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 3rem 2rem;
  max-width: 650px;
  text-align: center;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease;
}

/* Adaptación al modo claro */
:global(.light) .glass-card {
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
}

/* FOTO DE PERFIL */
.profile-photo {
  width: 140px;
  height: 140px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  padding: 4px;
  background: linear-gradient(45deg, var(--dot-1), var(--dot-2));
}

.profile-photo img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  background-color: var(--bg-base-1);
}

/* TEXTOS */
.title {
  font-size: 2.5rem;
  margin: 0 0 0.5rem;
}

.title span {
  background: linear-gradient(45deg, var(--dot-1), var(--dot-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1.2rem;
  font-weight: 500;
  opacity: 0.9;
  margin: 0 0 1.5rem;
}

.bio {
  font-size: 1.05rem;
  line-height: 1.6;
  opacity: 0.8;
  margin-bottom: 2rem;
}

/* ETIQUETAS DE HABILIDADES */
.skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-bottom: 2.5rem;
}

.skill-tag {
  background: rgba(255, 255, 255, 0.1);
  padding: 8px 18px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.2s;
}

.skill-tag:hover {
  transform: translateY(-3px);
  background: rgba(255, 255, 255, 0.2);
}

:global(.light) .skill-tag {
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

/* CONTENEDOR DE BOTONES */
.social-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 1rem;
}

/* ESTILO BASE DEL BOTÓN */
.btn-social {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 28px;
  border-radius: 50px; /* Forma de píldora */
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden; /* Oculta el color antes de la animación */
  z-index: 1;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* Ajuste para el modo claro */
:global(.light) .btn-social {
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

/* EL EFECTO DE "LLENADO" (El fondo oculto) */
.btn-social::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%; /* Empieza fuera del botón, a la izquierda */
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* Colores de marca para el fondo oculto */
.github::before { background: #24292e; } /* Gris oscuro/Negro GitHub */
.linkedin::before { background: #0077b5; } /* Azul oficial LinkedIn */

/* ANIMACIÓN AL PASAR EL MOUSE (HOVER) */
.btn-social:hover {
  transform: translateY(-5px); /* Flota hacia arriba */
  color: #ffffff; /* El texto siempre se vuelve blanco para contrastar */
  border-color: transparent;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

/* Hace que el color inunde el botón */
.btn-social:hover::before {
  left: 0; 
}

/* Animación extra para el ícono */
.btn-social i {
  font-size: 1.3rem;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.btn-social:hover i {
  transform: scale(1.3) rotate(5deg); /* El ícono crece y gira un poquito */
}

/* Brillo específico de sombra según la marca */
.github:hover { box-shadow: 0 8px 25px rgba(36, 41, 46, 0.5); }
.linkedin:hover { box-shadow: 0 8px 25px rgba(0, 119, 181, 0.5); }

/* CONTENEDOR DE BOTONES DE ACCIÓN */
.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 2rem;
}

/* ESTILO GENERAL DE LOS BOTONES */
.btn-primary, .btn-secondary {
  padding: 12px 28px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none; /* Quita la línea azul de los enlaces */
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* BOTÓN PRIMARIO (Hablemos) - Gradiente neón */
.btn-primary {
  background: linear-gradient(45deg, var(--dot-1), var(--dot-2));
  color: white;
  border: none;
  box-shadow: 0 4px 15px rgba(0, 255, 204, 0.2);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 255, 204, 0.4);
}

/* BOTÓN SECUNDARIO (Descargar CV) - Estilo contorno cristal */
.btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-primary);
  border: 1px solid var(--dot-2);
  backdrop-filter: blur(5px);
}

.btn-secondary:hover {
  transform: translateY(-3px);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 25px rgba(0, 255, 204, 0.2);
}

/* Ajuste del botón secundario para el Modo Claro */
:global(.light) .btn-secondary {
  background: rgba(0, 0, 0, 0.05);
  border-color: var(--dot-3);
}

:global(.light) .btn-secondary:hover {
  background: rgba(0, 0, 0, 0.1);
}
</style>