<template>
  <div class="carousel-wrapper">
    <div class="image-text-container">
      <a
        href="https://lerici.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        class="hover-glow"
      >
        <img :src="lericiImage" alt="Slide Image" class="image" />
      </a>

      <div class="text-content">
        <h2 class="title">Lerici, Zapatos</h2>
        <p class="description">
          Este proyecto forma parte del trabajo final del curso de JavaScript en Coderhouse. Se trata de una aplicación que simula la compra en una fábrica de zapatos y está integrada con la API de MercadoPago para realizar pagos simulados como si fueran reales.
        </p>
        
        <a
          :href="certificado"
          target="_blank"
          rel="noopener noreferrer"
          class="hover-glow"
        >
          <img :src="coderImage" alt="Coder" class="secondary-image" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import lericiImage from "../assets/images/lerici.png";
import coderImage from "../assets/images/coder.png";
import certificado from "../assets/images/certificado.png";
</script>

<style scoped>
.carousel-wrapper {
  max-width: 900px;
  margin: auto;
  padding: 24px;
}

.image-text-container {
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: flex-start;
  flex-wrap: nowrap;
}

.image {
  width: 330px;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
  cursor: pointer;
}

.text-content {
  flex: 1;
}

.title {
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: bold;
}

.description {
  margin-bottom: 16px;
  line-height: 1.6;
}

.secondary-image {
  width: 100px;
  height: auto;
  object-fit: contain;
  margin-top: 16px;
  cursor: pointer;
}

/* ✨ Glow effect on hover */
.hover-glow img {
  transition: all 0.3s ease;
}

.hover-glow:hover img {
  filter: brightness(1.3);
  transform: scale(1.02);
}

@media (max-width: 768px) {
  .image-text-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .image {
    width: 100%;
    max-width: 350px;
  }

  .text-content {
    max-width: 100%;
  }

  .secondary-image {
    width: 80px;
  }
}
</style>
