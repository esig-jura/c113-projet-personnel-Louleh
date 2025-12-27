<template>
  <div class="container">
    <tile v-for="event in events" :label="event.Title" :description="event.Description" :img="event.Flyer"></tile>
  </div>
</template>

<script setup>
import Tile from '@/components/EventCard.vue'

import img1 from '../assets/images/welcomePicture.png'
import img2 from '../assets/images/gentlemens_1.png'

const events = [
  {
    Title: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque",
    Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesqueLorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque",
    Flyer: img1,
  },
  {
    Title: "Lorem ipsum dolor sit amet consectetur",
    Description: "Adipiscing elit. Quisque faucibus ex sapien vitae",
    Flyer: img2,
  }
]

</script>

<style scoped>

.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  padding: 16px;
}
</style>