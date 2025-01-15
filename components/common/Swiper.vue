<script setup lang="ts">
// Create 10 slides
const containerRef = ref(null);
const slides = ref(Array.from({ length: 10 }));

const swiper = useSwiper(containerRef);

onMounted(() => {
  // Access Swiper instance
  // Read more about Swiper instance: https://swiperjs.com/swiper-api#methods--properties
  console.log(swiper.instance);
});
</script>

<template>
  <ClientOnly>
    <swiper-container ref="containerRef">
      <swiper-slide
        v-for="(slide, idx) in slides"
        :key="idx"
        style="background-color: rgb(32 233 70); color: white"
      >
        Slide {{ idx + 1 }}
      </swiper-slide>
    </swiper-container>
  </ClientOnly>

  <!-- Go back one slide -->
  <button @click="swiper.prev()">Prev</button>
  <!-- Go forward one slide -->
  <button @click="swiper.next()">Next</button>
</template>
<style lang="css">
swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-size: 4rem;
  font-weight: bold;
}
</style>
