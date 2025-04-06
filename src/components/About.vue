<template>
  <section class="section about" aria-label="about-me" id="about">
    <div class="container">
      <div class="tab-container">
        <ul class="tab-btn-list">
          <li class="tab-btn-item">
            <button class="tab-btn title h6 active" data-tab-btn="about">
              Sobre mí
            </button>
          </li>

          <li class="tab-btn-item">
            <button class="tab-btn title h6" data-tab-btn="skillset">
              Tecnologías
            </button>
          </li>

          <li class="tab-btn-item">
            <button class="tab-btn title h6" data-tab-btn="interview">
              Experiencia
            </button>
          </li>

          <li class="tab-btn-item">
            <button class="tab-btn title h6" data-tab-btn="awward">
              Diseños
            </button>
          </li>
        </ul>

        <div class="tab-content active" data-tab-content="about">
          <div class="grid-list">
            <figure
              class="about-banner img-holder"
              style="--width: ; --height: "
              data-tilt
            >
              <img
                src="../assets/images/gif1.gif"
                width="570"
                height="420"
                loading="lazy"
                alt="about banner"
                class="img-cover"
              />
            </figure>

            <div class="about-content">
              <h2 class="h4 title section-title">
                Creatividad en Código y Diseño
              </h2>

              <p class="section-text">
                Explorando la intersección entre el desarrollo web y el diseño
                multimedia para crear proyectos innovadores y funcionales.
              </p>

              <ul class="about-list">
                <li class="about-item">
                  <p class="list-title">Name</p>

                  <span class="span title h5">Diego Rosso</span>
                </li>

                <li class="about-item">
                  <p class="list-title">Teléfono</p>

                  <span class="span title h5">11 3145 3388</span>
                </li>

                <li class="about-item">
                  <p class="list-title">Email</p>

                  <span class="span title h5">diegorosso1988@gmail.com</span>
                </li>

                <li class="about-item">
                  <p class="list-title">Social Network</p>

                  <div class="social-list">
                    <a href="#" class="social-link h6" title="Behance">Beh.</a>
                    <a href="#" class="social-link h6" title="Linkedin">Ln.</a>
                    <a href="#" class="social-link h6" title="Dribbble">Git.</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="tab-content" data-tab-content="skillset">
          <Skills />
        </div>

        <div class="tab-content" data-tab-content="interview">
          <Experience />
        </div>

        <div class="tab-content" data-tab-content="awward">
          <flyers />
          
        </div>

        
      </div>
    </div>
  </section>
</template>

<script setup>
import Skills from "./Skills.vue";
import Experience from "./Experience.vue";
import flyers from "./flyers.vue";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM completamente cargado y parseado.");

  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.getAttribute("data-tab-btn");
      console.log(`Botón clickeado: ${targetTab}`);

      // Mostrar por consola qué contenido está activo antes del cambio
      const activeContent = document.querySelector(".tab-content.active");
      if (activeContent) {
        console.log(
          `Contenido activo antes del cambio: ${activeContent.getAttribute(
            "data-tab-content"
          )}`
        );
      }

      // Remover clase activa de todos los botones y contenidos
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Agregar clase activa al botón clickeado
      button.classList.add("active");

      // Buscar y activar el contenido correspondiente
      const targetContent = document.querySelector(
        `.tab-content[data-tab-content="${targetTab}"]`
      );
      if (targetContent) {
        targetContent.classList.add("active");
        console.log(
          `Nuevo contenido activo: ${targetContent.getAttribute(
            "data-tab-content"
          )}`
        );
      } else {
        console.error(`No se encontró contenido para la pestaña: ${targetTab}`);
      }
    });
  });
});
</script>

<style scoped>
.tab-container {
  border: 1px solid var(--border-eerie-black);
}

.tab-btn {
  width: 100%;
  padding-block: 16px;
  border-block-end: 1px solid var(--border-eerie-black);
  transition: var(--transition-1);
}

.tab-btn:is(:hover, :focus-visible, .active) {
  background: var(--bg-eerie-black);
}

.tab-content {
  display: none;
  padding: 30px;
}

.tab-content.active {
  display: block;
  animation: fade 500ms linear forwards;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.tab-content .grid-list {
  display: grid;
  gap: 30px;
}

.tab-content .section-title {
  margin-block-end: 30px;
}

.tab-content .section-text,
.about-item:not(:last-child) {
  margin-block-end: 20px;
}

.about-item .span {
  line-height: 1.4;
}

.social-list {
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
}

.social-link {
  color: var(--text-white);
}

.skill-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block: 30px 12px;
}

.skill-wrapper .span {
  font-family: var(--fontFamily-recoleta);
  font-weight: var(--weight-medium);
}

.progress-bar {
  background-color: var(--bg-smoky-black);
  height: 4px;
}

.progress-fill {
  background-color: var(--bg-white);
  height: 100%;
}

.interview-card {
  position: relative;
}

.interview-card .btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  justify-content: center;
  border-radius: var(--radius-circle);
  color: var(--text-smoky-black);
}

.interview-card .btn::before,
.interview-card .btn::after {
  border-radius: inherit;
}

.interview-card .btn::before {
  background-color: var(--bg-white);
}

.interview-card .btn:is(:hover, :focus-visible) {
  color: var(--text-white);
}

.exhibition-card {
  position: relative;
}

.exhibition-card .card-icon {
  position: absolute;
  top: 30px;
  right: 30px;
  background-color: var(--bg-white);
  width: 40px;
  height: 40px;
  border-radius: var(--radius-circle);
  color: var(--bg-smoky-black);
  display: grid;
  place-items: center;
}

@media (min-width: 575px) {
  .tab-btn-list {
    display: flex;
    flex-wrap: wrap;
  }

  .tab-btn-item {
    width: 50%;
    flex-grow: 1;
  }

  .tab-btn-item:nth-child(2n) {
    border-inline-start: 1px solid var(--border-eerie-black);
  }

  .tab-content {
    padding: 40px;
  }

  .about-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .interview-card {
    max-width: max-content;
    margin-inline: auto;
  }
}

@media (min-width: 768px) {
  .tab-btn-item {
    width: 20%;
  }

  .tab-btn-item:not(:first-child) {
    border-inline-start: 1px solid var(--border-eerie-black);
  }

  :is([data-tab-content="interview"], [data-tab-content="exhibition"])
    .grid-list {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 992px) {
  .tab-content .grid-list {
    grid-template-columns: 1fr 1fr;
  }

  :is(
      [data-tab-content="interview"],
      [data-tab-content="exhibition"],
      [data-tab-content="awward"]
    )
    .grid-list {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1200px) {
  .tab-content {
    padding: 60px;
  }

  .tab-content .grid-list {
    gap: 50px;
  }
}
</style>
