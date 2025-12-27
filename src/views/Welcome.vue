<script setup>
import Tile from '@/components/tile.vue'
</script>

<template>
  <section class="welcome__content">
    <div class="container">
      <h1 class="welcome__title">Bienvenue au Gentlemen's Golf</h1>
      <p class="welcome__text">
        Un club privé où le golf se joue avec style, respect et tradition.
      </p>

      <div class="welcome__hero">
        <img
            src="@/assets/images/welcomePicture.png"
            alt="Bienvenue au Gentlemen's Golf"
            class="welcome__image"
        />
      </div>

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
  padding: 0;
}

.welcome__image {
  width: 100%;
  height: auto;
  border-radius: 1em;
  border: 5px solid var(--tertiary);
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.5);
}
.welcome__hero {
  display: flex;
  justify-content: center;
}

@media (min-width: 768px) {
  .welcome__image {
    max-height: 500px;
    width: auto;
    border-radius: 1em;
    border: 5px solid var(--tertiary);
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.5);
  }
  .welcome__hero {
    display: flex;
    justify-content: center;
  }
}

.welcome__content {
  padding: 2rem 2rem;
  background-color: var(--primary);
  color: var(--black);
  line-height: 1.3;
  text-align: center;
}

.container {
  max-width: 768px;
  margin: 0 auto;
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
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  padding: 1rem;
}
</style>