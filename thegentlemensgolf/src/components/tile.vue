<template>
  <router-link :to="to" class="clickable-box">
    <slot>{{ label }}</slot>
  </router-link>
</template>

<script setup>
defineProps({
  to: {
    type: [String, Object],
    required: true
  },
  label: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.clickable-box {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
  cursor: pointer;
  font-size: large;
}

.clickable-box:hover {
  border-color: #42b883;
  background-color: #f0fdf4;
}
</style>
