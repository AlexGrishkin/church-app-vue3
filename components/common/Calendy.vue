<template>
  <div :class="$style.calendyWrapper">
    <Scroller>
      <template v-if="slides.length > 0">
        <swiper-slide v-for="(slide, index) in calendyData" :key="index">
          <p>{{ slide.date }}</p>
          <p>{{ slide.weekDay }}</p>
        </swiper-slide>
      </template>
    </Scroller>
  </div>
</template>

<script setup lang="ts">
import Scroller from '~/components/common/Scroller.vue';
import { SwiperSlide } from 'swiper/vue';

interface EventProps {
  name: string;
  description: string;
  timeStart: string;
  timeEnd: string;
}

interface CalendyProps {
  date: string;
  weekDay: string;
  event: EventProps[];
}

const props = defineProps({
  calendyData: {
    type: Array as PropType<CalendyProps[]>,
    required: true,
  },
});

const slides = ref(['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5']);
</script>

<style scoped lang="scss" module>
.calendyWrapper {
  width: 35rem;
  height: auto;
}

:global(.swiper-slide) {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 105px;
  padding: 12px;
  border: 2px solid transparent;
  background: #fff;
  text-align: center;
  font-size: 12px;
  flex-direction: column;
  gap: 10px;
}

:global(.swiper-slide-active) {
  border-radius: 10px;
  border: 2px solid $dark-blue;
}
</style>
