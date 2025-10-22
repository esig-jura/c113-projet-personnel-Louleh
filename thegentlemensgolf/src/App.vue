<script setup>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
</script>

<template>
  <div id="app" class="layout">
    <Header />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
#app{
  background-color: var(--primary);
}

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  /*peut grandir, peut retrecir, prendre tout l'espace dispo peu importe la taille*/
  flex: 1;
}

@media (max-width: 600px) {
  #app {
    font-size: x-small;
  }
}
</style>
