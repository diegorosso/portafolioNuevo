<template>
  <footer class="footer">
    <div class="container">
      <p class="copyright">Design By Diego Rosso - 2025</p>

      <a href="#top" class="back-top-btn">
        <span class="span">Back To Top</span>
        <span class="arrow">&#8593;</span>
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
</style>
