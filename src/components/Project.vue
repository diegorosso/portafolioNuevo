<template>
  <section class="section project" aria-label="my latest projects" id="project">
    <div class="carousel-container">
      <!-- Botones de navegación -->
      <button class="nav-button prev" @click="scrollPrev">‹</button>
      <ul class="slider-list" ref="sliderList">
        <li
          class="slider-item"
          v-for="(project, index) in projects"
          :key="index"
        >
          <div class="project-card text-center">
            <div
              class="card-banner img-holder has-before"
              style="--width: 1000; --height: 763"
            >
              <img
                :src="project.image"
                width="1000"
                height="763"
                loading="lazy"
                :alt="`Project poster: ${project.title}`"
                class="img-cover"
              />

              <a :href="project.link" class="btn btn:hover">
                <span class="span">Visitar sitio</span>
                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </a>
            </div>

            <div class="card-content">
              <p class="card-subtitle">{{ project.category }}</p>
              <h3 class="title h3">
                <a :href="project.link" class="card-title">{{
                  project.title
                }}</a>
              </h3>
            </div>
          </div>
        </li>
      </ul>
      <button class="nav-button next" @click="scrollNext">›</button>
    </div>
  </section>
</template>

<script>
import aviImg from "../assets/images/avifauna.png";
import neuremify from "../assets/images/neuremi.png";
import fbp from "../assets/images/fpb.png";
import santa from "../assets/images/santa.png";
import olimpiadas from "../assets/images/olimpiadas.png";
import globali from "../assets/images/globali.png";
import peregrinaciones from "../assets/images/peregrinaciones.png";
import insan from "../assets/images/insan.png";
import blocki from "../assets/images/blocki.png";
import jdtex from "../assets/images/jdtex.png";
import Village from "../assets/images/village.png";
export default {
  data() {
    return {
      projects: [
        {
          image: aviImg,
          title: "Avifauna: El parque Ornitológico más grande de España.",
          category: "Web",
          link: "https://avifauna.net",
        },
        {
          image: neuremify,
          title: "Nuremify: Aplicación para reducir el estrés y la ansiedad.",
          category: "Aplicación",
          link: "https://www.neuromify.com",
        },
        {
          image: fbp,
          title: " FPB solar: Instalaciones Fotovoltaicas y Energía Solar.",
          category: "Web, Product",
          link: "https://www.fpbsolar.com/",
        },
        {
          image: santa,
          title:
            "Fundación La Santa Faz: Fundacion artistica, cultural y religiosa.",
          category: "Web, Worpress",
          link: "https://santafaz.org.ar/",
        },
        {
          image: olimpiadas,
          title:
            "Olimpiadas Rurais: Web para la organización de eventos deportivos.",
          category: "Web",
          link: "https://lavender-chimpanzee-223227.hostingersite.com/",
        },
        {
          image: globali,
          title: "Globanal MKT: Web de marketing y publicidad.",
          category: "Web",
          link: "https://globalmkt.com.ar",
        },
        {
          image: peregrinaciones,
          title: "Peregrinaciones Marianas: Web de peregrinaciones religiosas.",
          category: "Web",
          link: "https://peregrinacionesmarianas.com.ar/",
        },
        {
          image: insan,
          title: "Distribuidora Insa: Web de distribuidora, ferretería.",
          category: "Web",
          link: "https://distribuidorainsa.com.ar/",
        },
        {
          image: blocki,
          title: "Blockinar: Web Tecnológica",
          category: "Web",
          link: "https://blockinar.com/",
        },
        {
          image: jdtex,
          title: "Jdtex: fábrica de textiles y confección.",
          category: "Web",
          link: "https://jdtexarg.com.ar/",
        },
        {
          image: Village,
          title: "Village Polo Club: Web ropa deportiva.",
          category: "Web, Wordpress",
          link: "https://villagepoloclub.com.ar/",
        },
      ],
    };
  },
  mounted() {
    this.autoScroll = setInterval(() => {
      this.scrollNext();
    }, 4000); // cada 4 segundos
  },
  beforeDestroy() {
    clearInterval(this.autoScroll);
  },
  methods: {
    scrollNext() {
      const container = this.$refs.sliderList;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScrollLeft - 10) {

        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: container.offsetWidth,
          behavior: "smooth",
        });
      }
    },
    scrollPrev() {
      this.$refs.sliderList.scrollBy({
        left: -this.$refs.sliderList.offsetWidth,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  overflow: hidden;
}

.nav-button {
  position: absolute;
  top: 50%;
  z-index: 10;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: 0.3s ease;
}
.nav-button:hover {
  background-color: rgba(0, 0, 0, 0.6);
}
.nav-button.prev {
  left: 0;
}
.nav-button.next {
  right: 0;
}

.slider-list {
  display: flex;
  align-items: flex-start;
  gap: 30px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding-block-end: 5px;
}
.slider-list::-webkit-scrollbar {
  display: none;
}
.slider-item {
  scroll-snap-align: start;
  min-width: 100%;
}

@media (min-width: 768px) {
  .slider-item {
    min-width: calc(50% - 15px);
  }
}

@media (min-width: 992px) {
  .slider-item {
    min-width: calc(33.33% - 20px);
  }
}

/* Estilos originales del proyecto */
.project-card .card-banner::before {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: var(--bg-rich-black-fogra-29);
  background-image: var(--gradient-2);
  opacity: 0;
  transition: var(--transition-1);
}

.project-card .card-banner:is(:hover, :focus-within)::before {
  opacity: 0.9;
}

.project-card .btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
  min-width: max-content;
  opacity: 0;
  transition: var(--transition-2);
}

.project-card .card-banner:is(:hover, :focus-within) .btn {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.project-card .card-content {
  padding: 24px 30px 0;
}

.project-card .card-subtitle {
  font-size: var(--fontSize-10);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-block-end: 10px;
}

.project-card .card-title {
  display: inline;
  background-image: linear-gradient(var(--bg-white), var(--bg-white));
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 0 1px;
  transition: var(--transition-1);
}

.project-card .card-title:is(:hover, :focus-visible) {
  background-size: 100% 1px;
}
</style>
