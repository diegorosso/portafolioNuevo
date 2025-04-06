<template>
  <section class="section cta" aria-label="work with me">
    <div class="container">
      <h2 class="title h2 section-title text-center">
        Algunos proyectos con los que he trabajado recientemente...
      </h2>

      <a
        data-aos="fade-up"
        data-aos-delay="400"
        href="/diegoCv.pdf"
        download
        class="btn btn:hover"
      >
        <span class="span">Descargar CV</span>

        <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
      </a>
    </div>
  </section>
</template>

<style>
.cta {
  border-block: 1px solid var(--border-eerie-black);
}

.cta .section-title::before {
  content: "";
  display: block;
  background-color: var(--bg-white);
  width: 60px;
  height: 30px;
  border-radius: 30px 30px 0 0;
  margin-inline: auto;
  margin-block-end: 15px;
}

.cta .btn {
  margin-inline: auto;
  margin-block-start: 30px;
}

@media (min-width: 768px) {
  .cta {
    padding-block: 40px;
  }

  .cta .section-title {
    display: flex;
    align-items: center;
  }

  .cta .section-title::before {
    border-radius: 0 30px 30px 0;
    width: 30px;
    height: 60px;
    flex-shrink: 0;
    margin-block-end: 0;
  }

  @media (min-width: 992px) {
    .cta .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .cta .section-title {
      text-align: left;
      gap: 30px;
    }

    .cta .btn {
      flex-shrink: 0;
      margin: 0;
    }
  }
}
</style>
