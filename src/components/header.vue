<template>
  <header>
    <nav class="navbar" :class="{ expanded: isMenuOpen }">
      <div class="logo">
        <h1>The Gentlemen's Golf</h1>
      </div>

      <MenuDesktop
          class="desktop-nav"
          :items="navItems"
          @navigate="goTo"
      />

      <div class="menu mobile-nav">
        <button @click="toggleMenu">
          {{ isMenuOpen ? '×' : '☰' }}
        </button>
      </div>
    </nav>

    <MenuMobile
        class="mobile-nav"
        :is-open="isMenuOpen"
        :items="navItems"
        @navigate="goTo"
    />

  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import MenuDesktop from './menu/menuDesktop.vue'
import MenuMobile from './menu/menuMobile.vue'

const router = useRouter()

const isMenuOpen = ref(false)

const navItems = ref([
  { label: 'Home', route: 'home' },
  { label: 'About', route: 'about' },
  { label: 'Devenir membre', route: 'membership' }
])

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function goTo(routeName) {
  isMenuOpen.value = false
  router.push({ name: routeName })
}
</script>

<style scoped>
header {
  background-color: var(--primary);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: var(--tertiary);
}

.menu button {
  background: none;
  border: none;
  color: var(--tertiary);
  font-size: 1.5rem;
  cursor: pointer;
}

.navbar.expanded {
  background-color: var(--quaternary);
}

.desktop-nav {
  display: none;
}
.mobile-nav {
  display: flex;
}

@media (min-width: 768px) {
  .desktop-nav {
    display: block;
  }
  .mobile-nav {
    display: none;
  }
}
</style>