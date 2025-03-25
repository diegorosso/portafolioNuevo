<template>
  <section class="section about" aria-label="about-me" id="about">
    <div class="container">
      <div class="tab-container">
        <!-- Botones -->
        <ul class="tab-btn-list">
          <li class="tab-btn-item" v-for="tab in ['about', 'skillset', 'interview', 'awward', 'exhibition']" :key="tab">
            <button 
              class="tab-btn title h6" 
              :class="{ active: activeTab === tab }" 
              @click="changeTab(tab)">
              {{ tab.charAt(0).toUpperCase() + tab.slice(1) }}
            </button>
          </li>
        </ul>

        <!-- Contenido -->
        <div v-show="activeTab === 'about'" class="tab-content">
          <div class="grid-list">
            <figure class="about-banner img-holder img-border-radius">
              <img src="../assets/images/pic.gif" width="570" height="420" loading="lazy" alt="about banner" class="img-cover" />
            </figure>
            <div class="about-content">
              <h2 class="h4 title section-title">A very small stage in a vast cosmic.</h2>
              <p class="section-text">
                A very small stage in a vast cosmic arena great turbuslent clouds encyclo-paedia galactica...
              </p>
            </div>
          </div>
        </div>

        <div v-show="activeTab === 'skillset'" class="tab-content">
          <div class="grid-list">
            <div class="skill-content">
              <h3 class="h4 title section-title">We help to create visual strategies.</h3>
              <p class="section-text">
                A very small stage in a vast cosmic arena great turbuslent clouds encyclo-paedia galactica...
              </p>
            </div>
          </div>
        </div>

        <div v-show="activeTab === 'interview'" class="tab-content">
          <div class="grid-list">
            <div class="interview-card img-holder">
              <img src="./assets/images/interview-1.jpg" width="376" height="420" loading="lazy" alt="interview 1" class="img-cover" />
              <button class="btn btn:hover">Play</button>
            </div>
          </div>
        </div>

        <div v-show="activeTab === 'awward'" class="tab-content">
          <h3 class="h4 title section-title">
            We’re a team of creatives who are excited about unique ideas...
          </h3>
        </div>

        <div v-show="activeTab === 'exhibition'" class="tab-content">
          <ul class="grid-list">
            <li>
              <div class="exhibition-card">
                <figure class="card-banner img-holder">
                  <img src="./assets/images/exhibition-1.jpg" width="376" height="200" loading="lazy" alt="image" class="img-cover" />
                </figure>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      activeTab: "about",
      tabs: [
        { name: "about", label: "About Me", component: "AboutContent" },
        { name: "skillset", label: "Skillset", component: "SkillsetContent" },
        {
          name: "interview",
          label: "Interview",
          component: "InterviewContent",
        },
        { name: "awward", label: "Awwards", component: "AwwardContent" },
        {
          name: "exhibition",
          label: "Exhibition",
          component: "ExhibitionContent",
        },
      ],
    };
  },

  methods: {
    setActiveTab(tabName) {
      this.activeTab = tabName;
    },
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
.img-border-radius {
  border-radius: 5rem;
}

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

.about-banner {
  position: relative;
  display: inline-block;
}

.inner-image-container {
  position: absolute;
  top: -65px; /* Ajusta la posición vertical */
  left: 20px; /* Ajusta la posición horizontal */

}

.inner-image {
  width: 100%; /* La imagen se ajusta al contenedor */
  height: auto;
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
