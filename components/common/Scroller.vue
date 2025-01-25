<template>
  <div :class="$style.scrollerContainer">
    <swiper
      v-bind="swiperOptions"
      :class="$style.swiper"
      @swiper="onSwiper"
      @slide-change="onSlideChange"
    >
      <swiper-slide :class="$style['swiper-slide']">Slide 1</swiper-slide>
      <swiper-slide :class="$style['swiper-slide']">Slide 2</swiper-slide>
      <swiper-slide :class="$style['swiper-slide']">Slide 3</swiper-slide>
      <swiper-slide :class="$style['swiper-slide']">Slide 4</swiper-slide>
      <swiper-slide :class="$style['swiper-slide']">Slide 5</swiper-slide>
    </swiper>
  </div>
</template>
<script setup>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const modules = [Navigation, Pagination, Scrollbar, A11y];

// Настройки Swiper
const swiperOptions = {
  modules,
  slidesPerView: 3,
  centeredSlides: true,
  initialSlide: 1,
  spaceBetween: 10,
  navigation: true,
  noSwiping: true,
};

const swiperInstance = ref(null);
const activeSlideIndex = ref(0);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const onSlideChange = (swiper) => {
  activeSlideIndex.value = swiper.activeIndex;
  console.log('Slide changed!');
};
</script>

<style lang="scss" module>
.scrollerContainer {
  width: 100%;
  height: 100%;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
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
  border: 2px solid blue;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
