<template>
  <ClientOnly>
    <div :class="$style.swiperWrapper">
      <swiper-container
        ref="containerRef"
        :navigation="true"
        slides-per-view="3"
        space-between="10"
      >
        <swiper-slide
          v-for="(slide, idx) in slides"
          :key="idx"
          style="background-color: rgb(32 233 70); color: white"
        >
          Slide {{ idx + 1 }}
        </swiper-slide>
      </swiper-container>
    </div>
  </ClientOnly>
</template>

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

<style lang="scss" module>
.swiperWrapper {
  width: 100%;
}

swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: bold;
}
</style>
