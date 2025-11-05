<template>
  <transition name="slide">
    <div v-if="isOpen" class="navItems navSlide">
      <button
          v-for="item in items"
          :key="item.route"
          @click="$emit('navigate', item.route)"
      >
        {{ item.label }}
      </button>
    </div>
  </transition>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  },
  isOpen: {
    type: Boolean,
    default: false
  }
})

defineEmits(['navigate'])
</script>

<style scoped>
.navItems {
  display: flex;
  flex-direction: column !important;
  justify-content: space-between;
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

.navSlide {
  background-color: var(--quaternary);
  text-align: center;
  padding: 1rem;
}

.navItems button {
  font-size: small !important;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  max-height: 0px;
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  max-height: 200px;
}
</style>