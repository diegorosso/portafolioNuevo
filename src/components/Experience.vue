<template>
  <div class="grid-list">
    <div
      v-for="(project, index) in projects"
      :key="index"
      class="interview-card"
      data-tilt
    >
      <img
        :src="project.img"
        :alt="`Proyecto ${index + 1}`"
        class="img-cover"
        loading="lazy"
      />
      <div class="overlay">
        <button class="btn" @click="visitSite(project.link)">
          Visitar sitio
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import tuImg from "../assets/images/tuseguroimagenlogo.png";
import neImg from "../assets/images/neuremi.png";
import globalImg from "../assets/images/global.png";

export default {
  data() {
    return {
      projects: [
        { img: tuImg, link: "https://tuseguro.insure" },
        { img: neImg, link: "https://www.neuromify.com" },
        { img: globalImg, link: "https://globalmkt.com.ar" },
      ],
    };
  },
  methods: {
    visitSite(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
.grid-list {
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  padding: 2rem;
}

.interview-card {
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  cursor: pointer;
  background: linear-gradient(145deg, #e0e0e0, #ffffff);
}

.interview-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.2);
}

.img-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(60%) contrast(1.1);
  transition: filter 0.4s ease-in-out, transform 0.4s ease-in-out;
}

.interview-card:hover .img-cover {
  filter: grayscale(0%) contrast(1.2);
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  background: rgba(0, 0, 0, 0.3); /* efecto sutil de fondo */
  transition: opacity 0.4s ease;
}

.interview-card:hover .overlay {
  opacity: 1;
}

.btn {
  background: rgba(255, 255, 255, 0.85);
  border: none;
  padding: 12px 30px;
  font-weight: 600;
  font-size: 15px;
  
  color: #333;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: background 0.3s, transform 0.3s;
  backdrop-filter: blur(5px);
}

.btn:hover {
  background: #333;
  color: #fff;
  transform: scale(1.05);
}
@media (max-width: 768px) {
  .grid-list {
    padding:0;
  }
}
</style>
