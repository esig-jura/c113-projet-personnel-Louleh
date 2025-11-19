<template>
  <div class="card__container">
    <div>
      <h2>{{ label }}</h2>
    </div>
    <div class="container__body">
      <img :src="img" alt="" />
    </div>
    <div>
      <p>{{ description }}</p>
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
</style>