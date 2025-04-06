<template>
  <div
    class="carousel-container"
    @mouseover="pauseAutoPlay"
    @mouseleave="startAutoPlay"
  >
    <button @click="prevSlide" class="carousel-btn left">&#10094;</button>

    <div class="carousel-wrapper">
      <div class="carousel">
        <div
          class="carousel-item"
          v-for="(tech, index) in technologies"
          :key="index"
          :class="{ active: index === currentIndex }"
        >
          <div class="carousel-text">
            <h3 class="h4 title section-title">{{ tech.name }}</h3>
            <p class="section-text">{{ tech.description }}</p>
          </div>
          <div>
            <img :src="tech.img" :alt="tech.name" />
          </div>
        </div>
      </div>
    </div>

    <button @click="nextSlide" class="carousel-btn right">&#10095;</button>

    <!-- Dots de navegación -->
    <div class="dots">
      <span
        v-for="(tech, index) in technologies"
        :key="index"
        :class="{ active: index === currentIndex }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script>
import htmlImg from "../assets/images/html.png";
import cssImg from "../assets/images/css.png";
import jsImg from "../assets/images/js.png";
import vueImg from "../assets/images/vue.png";
import angImg from "../assets/images/angular.png";
import gitImg from "../assets/images/git.png";
import worImg from "../assets/images/wordpress.png";
import phoImg from "../assets/images/photoshop.png";
import afterImg from "../assets/images/effects.png";
import proImg from "../assets/images/processing.png";
import Canva from "../assets/images/Canva.png";
import Veutify from "../assets/images/veutify.png";
import Node from "../assets/images/Node.js.png";
import MongoDB from "../assets/images/mongodb.png";
import Firebase from "../assets/images/firebase.png";
import Figma from "../assets/images/figma.png";
import Bootstrap from "../assets/images/bootstrap.png";
import Sass from "../assets/images/sass.png";

export default {
  data() {
    return {
      currentIndex: 0,
      autoplayInterval: null,
      technologies: [
        {
          name: "HTML",
          img: htmlImg,
          description:
            "HTML (HyperText Markup Language) es el lenguaje estándar de marcado para la creación de páginas web. Define la estructura del contenido web mediante etiquetas y elementos.",
        },
        {
          name: "CSS",
          img: cssImg,
          description:
            "CSS (Cascading Style Sheets) se utiliza para estilizar documentos HTML, permitiendo el diseño visual y la presentación de las páginas web con colores, fuentes y posicionamiento.",
        },
        {
          name: "JavaScript",
          img: jsImg,
          description:
            "JavaScript es un lenguaje de programación que permite añadir interactividad a los sitios web, como animaciones, validaciones de formularios y manipulación del DOM.",
        },
        {
          name: "Vue.js",
          img: vueImg,
          description:
            "Vue.js es un framework progresivo de JavaScript para la construcción de interfaces de usuario y aplicaciones web de una sola página con un enfoque en la reactividad y la modularidad.",
        },
        {
          name: "Angular",
          img: angImg,
          description:
            "Angular es un framework de desarrollo web basado en TypeScript que permite la creación de aplicaciones web dinámicas y escalables con arquitectura modular.",
        },
        {
          name: "Git",
          img: gitImg,
          description:
            "Git es un sistema de control de versiones distribuido que permite a los desarrolladores rastrear cambios en el código, colaborar en proyectos y gestionar versiones de manera eficiente.",
        },
        {
          name: "WordPress",
          img: worImg,
          description:
            "WordPress es un sistema de gestión de contenidos (CMS) que facilita la creación y administración de sitios web y blogs sin necesidad de conocimientos avanzados de programación.",
        },
        {
          name: "Photoshop",
          img: phoImg,
          description:
            "Adobe Photoshop es un software de edición y manipulación de imágenes, utilizado en diseño gráfico, fotografía digital y creación de contenido visual.",
        },
        {
          name: "After Effects",
          img: afterImg,
          description:
            "Adobe After Effects es una aplicación de postproducción de video que permite la creación de efectos visuales, animaciones y gráficos en movimiento.",
        },
        {
          name: "Processing",
          img: proImg,
          description:
            "Processing es un entorno de programación y un lenguaje diseñado para el arte visual y la educación, facilitando la creación de gráficos y animaciones interactivas.",
        },
        {
          name: "Canva",
          img: Canva,
          description:
            "Canva es una herramienta de diseño gráfico en línea que permite crear presentaciones, infografías y otros contenidos visuales de manera sencilla y accesible.",
        },
        {
          name: "Vuetify",
          img: Veutify,
          description:
            "Vuetify es un framework de componentes de Material Design para Vue.js, que facilita la creación de interfaces de usuario atractivas y responsivas.",
        },
        {
          name: "Node.js",
          img: Node,
          description:
            "Node.js es un entorno de ejecución de JavaScript del lado del servidor, que permite construir aplicaciones escalables y rápidas utilizando JavaScript.",
        },
        {
          name: "MongoDB",
          img: MongoDB,
          description:
            "MongoDB es una base de datos NoSQL orientada a documentos, que permite almacenar y gestionar grandes volúmenes de datos de manera flexible y escalable.",
        },
        {
          name: "Firebase",
          img: Firebase,
          description:
            "Firebase es una plataforma de desarrollo de aplicaciones móviles y web que ofrece servicios como autenticación, base de datos en tiempo real y almacenamiento en la nube.",
        },
        {
          name: "Figma",
          img: Figma,
          description:
            "Figma es una herramienta de diseño colaborativo en línea que permite crear interfaces de usuario, prototipos y diseños gráficos de manera eficiente y en tiempo real.",
        },
        {
          name: "Bootstrap",
          img: Bootstrap,
          description:
            "Bootstrap es un framework front-end que facilita el desarrollo de sitios web responsivos y móviles mediante el uso de HTML, CSS y JavaScript predefinidos.",
        },
        {
          name: "Sass",
          img: Sass,
          description:
            "Sass es un preprocesador CSS que añade características como variables, anidamiento y mixins, facilitando la escritura y mantenimiento de estilos CSS más complejos.",
        },
      ],
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.technologies.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.technologies.length) %
        this.technologies.length;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
    startAutoPlay() {
      this.autoplayInterval = setInterval(this.nextSlide, 2000);
    },
    pauseAutoPlay() {
      clearInterval(this.autoplayInterval);
    },
  },
  mounted() {
    this.startAutoPlay();
  },
  beforeUnmount() {
    this.pauseAutoPlay();
  },
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: auto;
}

.carousel-wrapper {
  overflow: hidden;
}

.carousel {
  display: flex;
  flex-wrap: nowrap;
}

.carousel-item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 0.8s ease-in-out, transform 0.5s ease-in-out;
  position: absolute;
  width: 100%;
}

.carousel-item.active {
  opacity: 1;
  transform: scale(1);
  position: relative;
}

.carousel-item img {
  max-width: 100px;
  height: auto;
  margin-top: 10px;
  transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
  cursor: pointer;
  animation: glow 0.8s ease-in-out infinite alternate; /* Se aplica el brillo permanentemente */
}

.carousel-item img:hover {
  animation: glow 0.8s ease-in-out infinite alternate;
  transform: scale(1.1);
}

.carousel-text {
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 50%;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
}

.carousel-btn.left {
  left: 10px;
}

.carousel-btn.right {
  right: 10px;
}

/* Dots de navegación */
.dots {
  display: flex;
  justify-content: center;
  margin-top: 10rem;
}

.dots span {
  width: 12px;
  height: 12px;
  margin: 5px;
  background-color: #ccc;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  transition: background 0.3s;
}

.dots span.active {
  background-color: #000;
}
</style>
