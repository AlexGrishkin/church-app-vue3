<template>
  <div :class="$style.scrollerContainer">
    <swiper
      v-bind="swiperOptions"
      ref="swiperRef"
      :class="[$style.swiper, 'swiper-no-swiping']"
      @swiper="onSwiper"
      @slide-change="onSlideChange"
    >
      <template v-if="slidesLoaded">
        <slot />
      </template>
    </swiper>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue';
import { Swiper } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const modules = [Navigation, Pagination, Scrollbar, A11y];

const swiperOptions = {
  modules,
  slidesPerView: 3,
  centeredSlides: true,
  initialSlide: 1,
  spaceBetween: 10,
  navigation: true,
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
};

const swiperRef = ref(null);
const activeSlideIndex = ref(0);
const slidesLoaded = ref(false);

const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};

const onSlideChange = (swiper) => {
  activeSlideIndex.value = swiper.activeIndex;
  console.log('Slide changed!', swiper.activeIndex);
};

// до завершения рендеринга свайпер выдавал ошибку слотов и не мог найти слайды
onMounted(async () => {
  await nextTick(); // Ждем, пока Vue завершит рендеринг
  slidesLoaded.value = true;
});
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

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
