<template>
  <div class="navItems">
    <button
        v-for="item in items"
        :key="item.route"
        @click="$emit('navigate', item.route)"
    >
      {{ item.label }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})

defineEmits(['navigate'])
</script>

<style scoped>

.navItems {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
}

button {
  background: none;
  border: none;
  color: var(--tertiary);
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
