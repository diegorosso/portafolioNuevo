<template>
  <section class="section contact" aria-label="contact me" id="contact">
    <div class="container">
      <h2 class="title h2 section-title">Contacto</h2>

      <div class="contact-content">
        <form
          ref="formRef"
          @submit.prevent="sendEmail"
          class="contact-form"
        >
          <template v-for="(field, index) in inputFields" :key="index">
            <component
              :is="field.tag"
              v-bind="field.attrs"
              class="input-field"
            />
          </template>

          <button type="submit" class="btn btn:hover">
            <span class="span">Enviar mensaje</span>
            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
          </button>
        </form>

        <!-- MAPA Y CONTACTOS IGUAL QUE ANTES -->
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          width="600"
          height="450"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="map"
        ></iframe>

        <ul class="contact-list">
          <li class="contact-item" v-for="(item, index) in contactItems" :key="index">
            <div class="item-icon">
              <img
                :src="item.icon"
                width="50"
                height="50"
                loading="lazy"
                alt="contact icon"
                :class="svgColorClass"
              />
            </div>
            <div>
              <component
                :is="item.isLink ? 'a' : 'address'"
                class="title h6"
                v-bind="item.isLink ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' } : {}"
              >
                {{ item.text }}
              </component>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import emailjs from '@emailjs/browser'
import icon from '../assets/images/contact.svg'
import icon2 from '../assets/images/smartphone.svg'
import icon3 from '../assets/images/cottage.svg'
import { globalState } from '../globalState'

// 👇 Refs y computed
const formRef = ref(null)
const svgColorClass = computed(() => globalState.isDarkMode ? 'svg-light' : 'svg-dark')

// 👇 Campos del formulario
const inputFields = [
  {
    tag: 'input',
    attrs: {
      type: 'text',
      name: 'name',
      placeholder: 'Nombre',
      autocomplete: 'off',
      required: true,
    },
  },
  {
    tag: 'input',
    attrs: {
      type: 'email',
      name: 'email_address',
      placeholder: 'Email',
      autocomplete: 'off',
      required: true,
    },
  },
  {
    tag: 'input',
    attrs: {
      type: 'tel',
      name: 'phone',
      placeholder: 'Teléfono',
      autocomplete: 'off',
    },
  },
  {
    tag: 'textarea',
    attrs: {
      name: 'message',
      placeholder: 'Mensaje',
      required: true,
    },
  },
]

// 👇 Info de contacto
const contactItems = [
  {
    icon: icon2,
    text: '15 3145 3388',
    isLink: true,
    href: 'https://wa.me/541131453388',
  },
  {
    icon: icon3,
    text: 'San Isidro, Buenos Aires, Argentina',
    isLink: false,
  },
  {
    icon: icon,
    text: 'diegorosso1988@gmail.com',
    isLink: true,
    href: 'mailto:diegorosso1988@gmail.com',
  },
]

// 👇 Función para enviar email con EmailJS
const sendEmail = () => {
  if (!formRef.value) return

  emailjs
    .sendForm(
      'service_bpdnrft',
      'template_0299iab',
      formRef.value,
      'rtp5OCQsr9OC_68R4'
    )
    .then(
      (result) => {
        console.log('Correo enviado:', result.text)
        alert('¡Mensaje enviado con éxito!')
        formRef.value.reset()
      },
      (error) => {
        console.error('Error al enviar:', error.text)
        alert('Ocurrió un error al enviar el mensaje.')
      }
    )
}
</script>




<style>
.contact .section-title {
  font-size: var(--fontSize-1);
  margin-block-end: 25px;
}

.contact-content {
  display: grid;
  gap: 60px;
}

.contact-form .input-field {
  height: 50px;
  padding-block: 12px;
  margin-block-end: 20px;
  color: var(--text-white);
  outline: none;
  border-block-end: 1px solid var(--border-eerie-black);
  transition: border-color var(--transition-1);
}

.contact-form .input-field::placeholder {
  color: var(--text-light-gray);
}

.contact-form .input-field:focus {
  border-color: var(--border-light-gray);
}

textarea.input-field {
  min-height: 165px;
  resize: none;
}

.contact-form .btn {
  margin-block-start: 30px;
}

.contact .map {
  width: 100%;
  filter: grayscale(1);
}

.contact-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
}

.contact-item:not(:last-child) {
  padding-block-end: 30px;
  border-block-end: 1px solid var(--border-eerie-black);
  margin-block-end: 30px;
}

.contact-item .title {
  color: var(--text-light-gray);
}

.contact-item a {
  color: var(--text-light-gray);
  text-decoration: none;
}

.contact-item a:hover {
  text-decoration: underline;
}

.svg-dark {
  filter: brightness(0) saturate(100%);
}

.svg-light {
  filter: brightness(100%) saturate(0);
}

@media (min-width: 992px) {
  .contact-content {
    grid-template-columns: 0.8fr 1fr 0.6fr;
    gap: 30px;
    align-items: center;
  }
}
</style>
