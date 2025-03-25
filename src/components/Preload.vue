<template>
    <div v-if="isVisible" class="preloader" :class="{ loaded: isLoaded }" data-preloader @animationend="onAnimationEnd">
      <span class="line"></span>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isVisible: true, // Controla si el componente está montado
        isLoaded: false, // Controla la clase de animación
      };
    },
    mounted() {
      // Simula el final de la carga y activa la animación de desmontaje
      setTimeout(() => {
        this.isLoaded = true;
      }, 1000); // Ajusta este tiempo según la duración de tu animación
    },
    methods: {
      onAnimationEnd() {
        // Desmonta el componente después de que termine la animación
        if (this.isLoaded) {
          this.isVisible = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    box-shadow: inset 55vw 0 0 0 var(--bg-white),
                inset -55vw 0 0 0 var(--bg-white);
    display: grid;
    place-items: center;
    z-index: 10;
  }
  
  .preloader.loaded {
    transition: 300ms ease 500ms;
    pointer-events: none;
    box-shadow: inset 0 0 0 0 var(--bg-white),
                inset 0 0 0 0 var(--bg-white);
  }
  
  .preloader .line {
    width: 1px;
    height: 100%;
    background-color: var(--bg-black);
    transition: var(--transition-2);
    animation: loading 1000ms linear forwards;
  }
  
  @keyframes loading {
    0% { transform: scaleY(0); }
    100% { transform: scaleY(0.3); }
  }
  
  .preloader.loaded .line { animation: loaded 500ms ease forwards; }
  
  @keyframes loaded {
    0% { transform: scaleY(0.3); }
    100% {
      transform: scaleY(1);
      opacity: 0;
    }
  }
  </style>
  