<template>
  <footer>
    <div>
      <p> &copy; {{ new Date().getFullYear() }} The Gentlemen's golf — Tous droits réservés.</p>
    </div>
    <div class="footer-credit">
      <p>
        Website realized by
        <a href="https://lehmannl.ch" target="_blank" rel="noopener">
          Louleh
        </a>
      </p>
    </div>
  </footer>
</template>

<style scoped>

footer{
  background-color: var(--quaternary);
  text-align: center;
  padding: 1rem;
}

p, a{
  color: var(--tertiary);
}

.footer-credit {
  text-align: right;
  font-size: small;
}

</style>