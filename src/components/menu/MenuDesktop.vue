<template>
  <div class="navItems">
    <button
        v-for="item in items"
        :key="item.route"
        @click="$emit('navigate', item.route)"
        :class="{ selected: route.name === item.route }"
    >
      {{ item.label }}
    </button>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

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
}

button {
  background: none;
  border: none;
  color: var(--tertiary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 2rem;
}

.selected {
  font-weight: bold;
  text-decoration: underline;
}

</style>
