<template>
  <footer class="footer">
    <div class="container">
      <p class="copyright">Design By Diego Rosso - 2025</p>

      <a href="#top" class="back-top-btn">
        <span class="span">Back To Top</span>
        <img
          src="../assets/images/flecha.png"
          alt="Volver arriba"
          class="arrow-img"
        />
        <!-- Flecha hacia arriba -->
      </a>
    </div>
  </footer>
</template>

<style>
.footer {
  border-block-start: 1px solid var(--border-eerie-black);
}

.footer .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.copyright {
  flex-grow: 1;
  font-family: var(--fontFamily-recoleta);
}

.back-top-btn .span {
  display: none;
}

.back-top-btn {
  color: var(--text-white);
  padding: 32px 32px;
  border-inline: 1px solid var(--border-eerie-black);
}

.arrow-img {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.back-top-btn:hover .arrow-img {
  animation: bounce 1.5s infinite ease-in-out;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }
}
</style>
