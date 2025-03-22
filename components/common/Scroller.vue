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
    <div :class="[$style.swiperButton, 'swiper__button_prev']"><ArrowButton /></div>
    <div :class="[$style.swiperButton, 'swiper__button_next']"><ArrowButton rotate="right" /></div>
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
import ArrowButton from '~/components/UI/ArrowButton.vue';

const modules = [Navigation, Pagination, Scrollbar, A11y];

const emit = defineEmits(['slideChanged']);

const swiperOptions = {
  modules,
  slidesPerView: 'auto',
  centeredSlides: true,
  initialSlide: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper__button_next',
    prevEl: '.swiper__button_prev',
  },
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  injectStyles: false,
};

const swiperRef = ref(null);
const activeSlideIndex = ref(0);
const slidesLoaded = ref(false);

const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};

const onSlideChange = (swiper) => {
  activeSlideIndex.value = swiper.activeIndex;
  emit('slideChanged', swiper.activeIndex);
};

// до завершения рендеринга свайпер выдавал ошибку слотов и не мог найти слайды
onMounted(async () => {
  await nextTick(); // Ждем, пока Vue завершит рендеринг
  slidesLoaded.value = true;
});
</script>

<style lang="scss" module>
.scrollerContainer {
  position: relative;
  width: 100%;
  max-width: 35rem;
  height: 100%;
  max-height: 6.6rem;
  margin-right: 3rem;
  margin-left: 3rem;
}

.swiper {
  width: 100%;
  height: 100%;
}

:global(.swiper-wrapper) {
  justify-content: space-between;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiperButton {
  position: absolute;
  top: calc(50% - 20px);
  z-index: 1;
  display: grid;
  width: 40px;
  height: 40px;
  background-color: transparent;
  cursor: pointer;
  place-items: center;
}

:global(.swiper__button_prev) {
  left: -3rem;
}

:global(.swiper__button_next) {
  right: -3rem;
}
</style>
