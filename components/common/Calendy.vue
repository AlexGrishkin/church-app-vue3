<template>
  <div :class="$style.calendyWrapper">
    <Scroller>
      <template v-if="slides.length > 0">
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          {{ slide }}
        </swiper-slide>
      </template>
    </Scroller>
  </div>
</template>

<script setup>
import Scroller from '~/components/common/Scroller.vue';
import { SwiperSlide } from 'swiper/vue';

const slides = ref(['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5']);
</script>

<style scoped lang="scss" module>
.calendyWrapper {
  width: 42rem;
  height: auto;
}

:global(.swiper-slide) {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  background: #fff;
  text-align: center;
  font-size: 18px;
}

:global(.swiper-slide-active) {
  border-radius: 10px;
  border: 2px solid $dark-blue;
}
</style>
