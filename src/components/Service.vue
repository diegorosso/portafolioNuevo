<template>
  <section class="service text-center" aria-label="my services" id="service">
    <div class="container">
      <ul class="service-list">
        <li class="service-item">
          <div class="service-card">
            <div class="card-icon">
              <img
                src="../assets/images/service-icon-1.svg"
                width="80"
                height="80"
                loading="lazy"
                alt="service icon"
              />
            </div>

            <h3 class="card-title">
              <a href="#">
                Web <br />
                Development
              </a>
            </h3>
          </div>
        </li>

        <li class="service-item">
          <div class="service-card">
            <div class="card-icon">
              <img
                src="../assets/images/service-icon-2.svg"
                width="80"
                height="80"
                loading="lazy"
                alt="service icon"
              />
            </div>

            <h3 class="card-title">
              <a href="#">
                Digital <br />
                Marketing
              </a>
            </h3>
          </div>
        </li>

        <li class="service-item">
          <div class="service-card">
            <div class="card-icon">
              <img
                src="../assets/images/pill.svg"
                width="80"
                height="80"
                loading="lazy"
                alt="service icon"
              />
            </div>

            <h3 class="card-title">
              <a href="#">
                Graphics <br />
                Design
              </a>
            </h3>
          </div>
        </li>

        <li class="service-item">
          <div class="service-card">
            <div class="card-icon">
              <img
                src="../assets/images/service-icon-4.svg"
                width="80"
                height="80"
                loading="lazy"
                alt="service icon"
              />
            </div>

            <h3 class="card-title">
              <a href="#">
                Mobile <br />
                Application
              </a>
            </h3>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.service {
  border-block-start: 1px solid var(--border-eerie-black);
  margin-block-start: var(--section-spacing);
}

.service .container {
  padding-inline: 0;
}

.service-item {
  border-block-end: 1px solid var(--border-eerie-black);
}

.service-card {
  position: relative;
  padding-block: 45px;
}

.service-card .card-icon {
  max-width: max-content;
  margin-inline: auto;
  transition: var(--transition-1);
}

.service-card .card-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
  color: var(--text-white);
  font-size: var(--fontSize-5);
  font-weight: var(--weight-regular);
  line-height: 1.3;
  opacity: 0;
  transition: var(--transition-1);
}

.service-card:is(:hover, :focus-visible) .card-title {
  opacity: 1;
  transform: translate(-50%, -50%);
}

.service-card:is(:hover, :focus-visible) .card-icon {
  opacity: 0;
}

@media (min-width: 575px) {
  .service .container {
    max-width: unset;
  }

  .service-list {
    display: flex;
    flex-wrap: wrap;
  }

  .service-item {
    width: 50%;
  }

  .service-item:nth-child(2n) {
    border-inline-start: 1px solid var(--border-eerie-black);
  }

  .service-card .card-title {
    --fontSize-5: 2.4rem;
  }
}

@media (min-width: 768px) {
  .service-item {
    width: 25%;
  }

  .service-item:not(:last-child) {
    border-inline-end: 1px solid var(--border-eerie-black);
  }
}

@media (min-width: 992px) {
  .service {
    border-block-end: 1px solid var(--border-eerie-black);
  }

  .service-list {
    gap: 158px;
    flex-wrap: nowrap;
  }

  .service .service-item {
    border-inline: 1px solid var(--border-eerie-black);
    border-block-end: none;
  }
}
</style>
