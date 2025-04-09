import { reactive, watch } from 'vue';

export const globalState = reactive({
  isDarkMode: true,
  user: null,
});

// Console log para ver el estado inicial
console.log('Estado inicial:', globalState);

// Watch para detectar cualquier cambio en las propiedades
watch(
  () => globalState.isDarkMode,
  (newVal, oldVal) => {
    console.log(`isDarkMode cambió de ${oldVal} a ${newVal}`);
  }
);

watch(
  () => globalState.user,
  (newVal, oldVal) => {
    console.log('user cambió de', oldVal, 'a', newVal);
  }
);
