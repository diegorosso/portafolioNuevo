<template>
  <div class="hero text-center" id="home" >
    <div class="container">
      <div class="banner-outline has-after">
        <!-- Contenedor con efecto de inclinación -->
        <div
          class="hero-banner img-holder has-after"
          style="--width: 500; --height: 680"
          @mousemove="applyTilt"
          ref="tiltElement"
          data-aos="fade-left"
        >
          <div class="light-effect"  ></div>
          <img
            src="../assets/images/bio.gif"
            width="500"
            height="680"
            alt="Diego Rosso"
            class="img-cover"
          />
        </div>
      </div>

      <div class="hero-content" data-aos="fade-right" data-aos-duration="10000">
        <h1 class="h1 title">Desarrollador Web Frontend</h1>

        <div class="wrapper">
          <a href="#" class="btn btn:hover">
            <span class="span">Descargar CV</span>

            <ion-icon
              name="cloud-download-outline"
              aria-hidden="true"
            ></ion-icon>
          </a>

          <p class="hero-text">
            Desarrollador web con experiencia en interfaces de usuario y diseño.
          </p>
        </div>
      </div>

      <img
        src="../assets/images/hero-shape-1.png"
        width="559"
        height="232"
        alt="shape"
        class="shape shape-1"
      />

      <img
        src="../assets/images/hero-shape-2.png"
        width="1358"
        height="497"
        alt="shape"
        class="shape shape-2"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroComponent",

  methods: {
    /**
     * Aplica el efecto de inclinación basado en la posición del mouse.
     */
    applyTilt(event) {
      const tiltElement = this.$refs.tiltElement;

      // Obtener el centro del elemento
      const centerX = tiltElement.offsetWidth / 2;
      const centerY = tiltElement.offsetHeight / 2;

      // Calcular el ángulo de inclinación
      const tiltPosX = ((event.offsetY - centerY) / centerY) * 10;
      const tiltPosY = ((event.offsetX - centerX) / centerX) * 10;

      // Aplicar la transformación
      tiltElement.style.transform = `perspective(1000px) rotateX(${tiltPosX}deg) rotateY(${
        tiltPosY * -1
      }deg)`;
    },
  },
};
</script>

<style scoped>
.hero {
  position: relative;
  padding-block-start: 120px;
}

.hero .container {
  display: grid;
  gap: 50px;
}

.banner-outline {
  position: relative;
  max-width: max-content;
  margin-inline: auto;
}

.banner-outline::after {
  top: 20px;
  right: 0;
  width: 100%;
  height: 100%;
  outline: 1px solid var(--border-eerie-black);
  border-radius: var(--radius-pill);
}

.hero-banner {
  position: relative;
  border-radius: var(--radius-pill);
}

.hero-banner .light-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0)
  );
  opacity: 0;
  pointer-events: none;
  transition: opacity 1s ease;
}

.hero-banner:hover .light-effect {
  animation: slide-light 1s ease-in-out forwards;
  opacity: 1;
}

@keyframes slide-light {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
}

.hero-banner::after {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: var(--gradient-1);
  opacity: 0.7;
  pointer-events: none;
}

.hero-banner:hover .light-effect {
  animation: slide-light 1s ease-in-out forwards;
  opacity: 1;
}

.banner-outline .span {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  font-size: var(--fontSize-4);
  min-width: max-content;
  z-index: 1;
}

.hero .btn {
  margin-block: 20px;
  margin-inline: auto;
}

.hero .shape {
  position: absolute;
  max-width: 100%;
  z-index: -1;
}

.hero .shape-2 {
  top: 180px;
  left: 0;
}

@media (min-width: 575px) {
  .hero .banner-outline {
    max-width: 410px;
  }

  .hero .banner-outline::after {
    right: -15px;
  }
}

@media (min-width: 768px) {
  .hero {
    text-align: left;
  }

  .hero .container {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 40px;
  }

  .banner-outline {
    order: 1;
  }

  .hero .btn {
    margin-inline: 0;
  }
}

@media (min-width: 992px) {
  .hero .container {
    grid-template-columns: 1fr 0.7fr;
  }

  .hero .banner-outline {
    max-width: 366px;
  }

  .hero .wrapper {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .hero .btn {
    flex-shrink: 0;
  }
}

@media (min-width: 1200px) {
  .hero {
    padding-block-start: 160px;
  }

  .hero .banner-outline {
    max-width: 410px;
  }

  .hero-text {
    max-width: 30ch;
  }
}

@media (min-width: 1400px) {
  .hero .container {
    grid-template-columns: 1fr 0.85fr;
  }
}
</style>