<template>
  <section class="section contact" aria-label="contact me" id="contact">
    <div class="container">
      <h2 class="title h2 section-title">Contacto</h2>

      <div class="contact-content">
        <form action="./index.html" method="post" class="contact-form">
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

        <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.078080279516!2d-58.51591742423494!3d-34.49965777298403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb0539b37e3f1%3A0xf25a4f75cb37aa80!2sSan%20Isidro%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1712076540000!5m2!1ses!2sar"
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
import icon from '../assets/images/contact.svg';
import icon2 from '../assets/images/smartphone.svg';
import icon3 from '../assets/images/cottage.svg';
import { computed } from 'vue';
import { globalState } from "../globalState";

const svgColorClass = computed(() => globalState.isDarkMode ? 'svg-light' : 'svg-dark');

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
];

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
];
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
