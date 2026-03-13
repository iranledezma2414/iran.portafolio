<template>
  <header class="navbar-container">
    <nav class="glass-navbar">
      
      <div class="logo">
        <NuxtLink to="/">Irán<span>.</span></NuxtLink>
      </div>

      <ul class="nav-links">
        <li><NuxtLink to="/">Inicio</NuxtLink></li>
        <li><NuxtLink to="/proyectos">Mis proyectos</NuxtLink></li>
        <li><NuxtLink to="/contacto">Contacto</NuxtLink></li>
      </ul>

      <div class="nav-actions">
        <ColorModeButton />
      </div>

    </nav>
  </header>
</template>

<style scoped>
/* Centramos el contenedor y lo separamos del techo */
.navbar-container {
  position: fixed;
  top: 25px; /* Separación del borde superior */
  left: 50%;
  transform: translateX(-50%); /* Truco para centrar de forma absoluta */
  z-index: 1000;
  width: auto; /* Ya no ocupa el 100% de la pantalla */
}

/* LA PÍLDORA DE CRISTAL */
.glass-navbar {
  display: flex;
  align-items: center;
  gap: 40px; /* Separación entre tu logo, los links y el botón */
  padding: 10px 20px 10px 30px;
  background: rgba(255, 255, 255, 0.08); /* Un poco más sutil */
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease;
}

:global(.light) .glass-navbar {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

/* ESTILOS DEL LOGO */
.logo a {
  font-size: 1.4rem;
  font-weight: 800;
  text-decoration: none;
  color: var(--text-primary);
  letter-spacing: 1px;
}
.logo span {
  color: var(--dot-2);
}

/* ESTILOS DE LOS ENLACES */
.nav-links {
  list-style: none;
  display: flex;
  gap: 25px;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 600;
  font-size: 0.95rem;
  opacity: 0.7;
  transition: all 0.3s ease;
  padding: 5px 10px;
  border-radius: 20px;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  opacity: 1;
  color: var(--bg-base-1); 
  background: var(--dot-2); /* Fondo neón al pasar el mouse */
  transform: scale(1.05);
}

/* Para que el botón de modo oscuro se alinee bien */
.nav-actions {
  display: flex;
  align-items: center;
}
</style>