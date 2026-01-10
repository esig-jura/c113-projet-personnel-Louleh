<template>
  <header>
    <nav class="navbar" :class="{ expanded: isMenuOpen }">
      <div class="logo">
        The Gentlemen's Golf
      </div>

      <MenuDesktop
          class="desktop-nav"
          :items="navItems"
          @navigate="goTo"
      />

      <div class="menu mobile-nav">
        <button @click="toggleMenu">
          {{ isMenuOpen ? 'X' : '☰' }}
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

import MenuDesktop from './menu/MenuDesktop.vue'
import MenuMobile from './menu/MenuMobile.vue'

const router = useRouter()

const isMenuOpen = ref(false)

const navItems = ref([
  { label: 'Home', route: 'Home' },
  { label: 'About', route: 'about' },
  { label: 'Devenir membre', route: 'membership' },
  { label: 'Événements', route: 'events' }
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

.logo{
  font-size: 1.5rem !important;
  font-weight: bold;
}

@media (min-width: 1024px) {
  .desktop-nav {
    display: block;
  }
  .mobile-nav {
    display: none;
  }

  .logo{
    font-size: 1.6rem !important;
    font-weight: bold;
  }
}
</style>