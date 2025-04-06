<script setup>
import { onMounted } from 'vue'
import Header from "./components/Header.vue";
import Preload from "./components/Preload.vue"
import Hero from "./components/Hero.vue"
import Service from "./components/Service.vue"
import About from "./components/About.vue"
import Cta from "./components/Cta.vue";
import Project from "./components/Project.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

onMounted(() => {
  const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent) || window.innerWidth <= 768;

  if (isMobile) {
    // Oculta los cursores personalizados en dispositivos móviles
    document.querySelectorAll("[data-cursor]").forEach(cursor => {
      cursor.style.display = "none";
    });
    return;
  }

  const cursors = document.querySelectorAll("[data-cursor]");
  const hoveredElements = [...document.querySelectorAll("button"), ...document.querySelectorAll("a")];

  const addEventOnElements = (elements, eventType, callback) => {
    elements.forEach(el => el.addEventListener(eventType, callback));
  };

  window.addEventListener("mousemove", function (event) {
    const posX = event.clientX;
    const posY = event.clientY;

    if (cursors.length > 0) {
      cursors[0].style.left = `${posX}px`;
      cursors[0].style.top = `${posY}px`;

      setTimeout(() => {
        if (cursors[1]) {
          cursors[1].style.left = `${posX}px`;
          cursors[1].style.top = `${posY}px`;
        }
      }, 80);
    }
  });

  addEventOnElements(hoveredElements, "mouseover", () => {
    cursors.forEach(cursor => cursor.classList.add("hovered"));
  });

  addEventOnElements(hoveredElements, "mouseout", () => {
    cursors.forEach(cursor => cursor.classList.remove("hovered"));
  });
});
</script>

<template>
  <!-- Custom cursors -->
  <div data-cursor class="cursor-dot"></div>
  <div data-cursor class="cursor-outline"></div>

  <Header />
  <Preload />
  <Hero />
  <Service />
  <About />
  <Cta />
  <Project />
  <Contact />
  <Footer />
</template>

<style>
.cursor-dot,
.cursor-outline {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.1s ease, left 0.1s ease, top 0.1s ease;
  mix-blend-mode: difference;
}

.cursor-dot {
  width: 8px;
  height: 8px;
  background-color: white;
  border-radius: 50%;
}

.cursor-outline {
  width: 32px;
  height: 32px;
  border: 2px solid white;
  border-radius: 50%;
}

.cursor-dot.hovered,
.cursor-outline.hovered {
  transform: scale(1.5);
}
</style>



