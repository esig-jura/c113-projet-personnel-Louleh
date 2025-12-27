<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div id="app" class="layout">
    <Header />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <div :key="$route.path">
          <component :is="Component" />
          </div>
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
#app{
  background-color: var(--primary);
}

.layout {
  /*flex = les enfants se placent sur une ligne directrice*/
  display: flex;
  flex-direction: column;
  /*100% de la hauteur de la fenetre*/
  min-height: 100vh;
}

.main-content {
  /*peut grandir, peut retrecir, prendre tout l'espace dispo peu importe la taille*/
  flex: 1;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>