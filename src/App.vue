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
</style>