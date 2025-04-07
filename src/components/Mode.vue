<template>
  <button class="theme-switch" @click="toggleTheme" :class="{ light: isLight }">
    <div class="switch-thumb">
      <img :src="isLight ? light : dark" alt="theme icon" />
    </div>
  </button>
</template>

<script setup>
import dark from '../assets/images/dark.png'
import light from '../assets/images/light.png'
import { onMounted, computed } from 'vue'
import { globalState } from '../globalState' // <-- Ruta relativa a donde tengas el archivo

const isLight = computed({
  get: () => !globalState.isDarkMode,
  set: (val) => {
    globalState.isDarkMode = !val
    document.body.classList.toggle('light-theme', val)
    localStorage.setItem('theme', val ? 'light' : 'dark')
  }
})

const toggleTheme = () => {
  isLight.value = !isLight.value
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'light') {
    isLight.value = true
  }
})
</script>

<style scoped>
.theme-switch {
  width: 48px;
  height: 26px;
  background-color: #444;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  padding: 3px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;
  position: relative;
}

.theme-switch.light {
  background-color: #ccc;
}

.switch-thumb {
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  transform: translateX(0);
}

.theme-switch.light .switch-thumb {
  transform: translateX(22px);
}

.switch-thumb img {
  width: 14px;
  height: 14px;
}
</style>
