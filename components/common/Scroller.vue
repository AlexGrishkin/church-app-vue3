<template>
  <div :class="$style.scrollerContainer">
    <swiper
      :modules="modules"
      :slides-per-view="3"
      :space-between="10"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
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

const onSwiper = (swiper) => {
  console.log('Swiper instance:', swiper);
};

const onSlideChange = () => {
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
  border-radius: 5px;
  border: 2px solid blue;
  background: #fff;
  text-align: center;
  font-size: 18px;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
