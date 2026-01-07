<template>
  <div class="card__container">
    <div>
      <h2 class="event__title">{{ label }}</h2>
    </div>
    <div class="container__body">
      <img :src="img" alt="Photo de couverture de l'événement." />
    </div>
    <div>
      <p class="event__description">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  img: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.card__container {
  border: 1px solid var(--quaternary);
  border-radius: 8px;
  background-color: var(--secondary);
  color: var(--quaternary);
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 70%;
  padding-left: 1rem;
  padding-right: 1rem;
}

.container__body img {
  width: 100%;
  display: block;
  object-fit: cover;
}

.event__description{
  font-size: 1.2rem;
  line-height: 2rem;
}

.event__title {
  font-size: 1.5rem;
  letter-spacing: -0.02em;
  line-height: 1.5rem;
}

@media (min-width: 768px) {
  .card__container {
    border: 1px solid var(--quaternary);
    border-radius: 8px;
    background-color: var(--secondary);
    color: var(--quaternary);
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 40%;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .container__body img {
    width: 100%;
    display: block;
    object-fit: cover;
  }
}
</style>