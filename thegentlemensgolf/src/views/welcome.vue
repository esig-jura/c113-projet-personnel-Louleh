<script setup>
  import Tile from '@/components/tile.vue'
</script>

<template>
  <section class="imgSection">
    <img
        src="@/assets/images/welcomePicture.png"
        alt="Bienvenue au Gentlemen's Golf"
    />
  </section>

  <section class="welcome">
    <div>
      <h1 class="welcome__title">Bienvenue au Gentlemen's Golf</h1>
      <p class="welcome__text">
        Un club privé où le golf se joue avec style, respect et tradition.
      </p>

      <div class="welcome__grid">
        <Tile to="/about" label="Découvrir le club" />
        <Tile to="/membership" label="Devenir membre" />
        <Tile to="/events" label="Événements" />
      </div>
    </div>
  </section>
</template>

<style scoped>

* {
  color: var(--tertiary);
  margin: 0;
}

img {
  width: 100%;
  display: block;
}

.welcome {
  padding: 2rem 2rem;
  background-color: var(--secondary);
  color: var(--black);
  line-height: 1.7;
  text-align: center;
}

.welcome__title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.welcome__text {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  text-align: center;
}

.welcome__grid {
  display: grid;
  /*auto-fit permet d'ajuster le nombre de colonnes en fonction de l'espace dispo*/
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

@media (min-width: 600px) {
  img {
    max-height: 500px;
    object-fit: cover;
  }
}

</style>