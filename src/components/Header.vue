<template>
  <header class="header" :class="{ active: isHeaderActive }">
    <div class="container">
      <a href="#" class="logo">
        <img src="@/assets/images/Diego.png" width="84" height="26" alt="logo" />
      </a>

      <nav class="navbar" :class="{ active: isNavActive }">
        <div class="navbar-top">
          <a href="#" class="logo">
            <img src="@/assets/images/Diego.png" width="84" height="26" alt="logo" />
          </a>
          <button class="nav-close-btn" aria-label="close menu" @click="toggleNav">
            <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>

        <ul class="navbar-list">
          <li v-for="(link, index) in links" :key="index">
            <a :href="link.href" class="navbar-link">{{ link.label }}</a>
          </li>
        </ul>
      </nav>

      <a href="#" class="btn btn:hover">
        <span class="span">Get A Quote</span>
        <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
      </a>

      <button class="nav-open-btn btn:hover" aria-label="open menu" @click="toggleNav">
        <span class="line line-1"></span>
        <span class="line line-2"></span>
      </button>

      <div class="overlay" :class="{ active: isNavActive }" @click="toggleNav"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      isNavActive: false, // Controla si el menú está abierto
      isHeaderActive: false, // Controla si el encabezado tiene la clase activa
      links: [
        { label: "Home", href: "#home" },
        { label: "Services", href: "#service" },
        { label: "About", href: "#about" },
        { label: "Project", href: "#project" },
        { label: "Review", href: "#review" },
        { label: "Contact", href: "#contact" },
      ],
    };
  },
  methods: {
    toggleNav() {
      this.isNavActive = !this.isNavActive;
    },
    handleScroll() {
      // Activa la clase si se ha hecho scroll hacia abajo
      this.isHeaderActive = window.scrollY > 0;
    },
  },
  mounted() {
    // Añade un evento de scroll al montar el componente
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    // Remueve el evento de scroll al desmontar el componente
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.header .btn {
  display: none;
}

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--bg-black);
  padding-block: 20px;
  z-index: 4;
}

.header.active {
  position: fixed;
  background-color: var(--bg-jet);
  padding-block: 10px;
  animation: slideIn 500ms ease-out forwards;
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-open-btn {
  width: 50px;
  height: 50px;
  display: grid;
  place-content: center;
  gap: 6px;
}

.nav-open-btn .line {
  width: 24px;
  height: 2px;
  background-color: var(--bg-black);
  transition: var(--transition-1);
}

.nav-open-btn:is(:hover, :focus-visible) .line {
  background-color: var(--bg-white);
}

.nav-open-btn:is(:hover, :focus-visible) .line-1 {
  transform: scaleX(0.7);
}

.nav-open-btn::before {
  background-color: var(--bg-white);
}

.nav-open-btn::after {
  background-color: var(--bg-black);
}

.navbar {
  position: fixed;
  background-color: var(--bg-black);
  top: 0;
  left: -300px;
  width: 100%;
  max-width: 300px;
  height: 100vh;
  padding: 25px 20px;
  visibility: hidden;
  transition: 250ms var(--cubic-in);
  z-index: 3;
}

.navbar.active {
  transform: translateX(300px);
  visibility: visible;
  transition: 500ms var(--cubic-out);
}

.navbar-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block-end: 20px;
  border-block-end: 1px solid var(--border-smoky-black);
  margin-block-end: 10px;
}

.nav-close-btn {
  width: 30px;
  height: 30px;
  background-color: var(--bg-smoky-black);
  color: var(--text-white);
  font-size: 2rem;
  display: grid;
  place-items: center;
}

.nav-close-btn ion-icon {
  --ionicon-stroke-width: 50px;
}

.navbar-link {
  padding: 8px;
  margin-block-start: 4px;
}

.navbar-link:is(:hover, :focus-visible) {
  color: var(--text-white);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--bg-black);
  opacity: 0;
  pointer-events: none;
  z-index: 2;
  transition: var(--transition-1);
}

.overlay.active {
  opacity: 0.5;
  pointer-events: all;
}

@media (min-width: 992px) {
  .header .container {
    margin-inline: 0;
    min-width: 100%;
  }

  .nav-open-btn,
  .navbar-top {
    display: none;
  }

  .navbar {
    all: unset;
    display: block;
  }

  .navbar-list {
    display: flex;
    gap: 16px;
  }

  .header .btn {
    display: flex;
  }
}
@media (min-width: 1200px) {
  .header {
    padding-block: 40px;
  }

  .header .container {
    padding-inline: 60px;
  }

  .navbar-list {
    gap: 50px;
  }
}

@media (min-width: 1400px) {
  .header {
    padding-inline: 90px;
  }
}
</style>
