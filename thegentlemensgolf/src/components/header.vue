<template>
  <header>
    <nav class="navbar" :class="{ expanded: isMenuOpen && !isLargeScreen }">
      <div class="logo">
        <h1>The Gentlemen's Golf</h1>
      </div>

      <div class="menu" v-if="!isLargeScreen">
        <button @click="toggleMenu">
          {{ isMenuOpen ? '×' : '☰' }}
        </button>
      </div>

      <div class="navItems" v-else>
        <button @click="goTo('home')">Home</button>
        <button @click="goTo('about')">About</button>
        <button @click="goTo('membership')">Devenir membre</button>
      </div>
    </nav>

    <transition name="slide">
      <div v-if="isMenuOpen && !isLargeScreen" class="navItems navSlide">
        <button @click="goTo('home')">Home</button>
        <button @click="goTo('about')">About</button>
        <button @click="goTo('membership')">Devenir membre</button>
      </div>
    </transition>
  </header>
</template>

<script setup>

import { useWindowSize } from '@vueuse/core'
import {computed, ref} from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const { width } = useWindowSize()
const isLargeScreen = computed(() => width.value >= 768)

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function goTo(routeName) {
  isMenuOpen.value = false;
  router.push({ name: routeName })
}

</script>

<style scoped>

header{
  background-color: var(--primary);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: var(--tertiary);
}

@media (max-width: 768px) {
  .navItems {
    flex-direction: column !important;
  }

  .navItems button{
    font-size: small !important;
  }
}

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

.navbar.expanded {
  background-color: var(--quaternary);
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

.navSlide {
  background-color: var(--quaternary);
  text-align: center;
  padding: 1rem;
}
</style>