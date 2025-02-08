<template>
  <div :class="$style.calendyWrapper">
    <Scroller @slide-changed="onSlideChanged">
      <template v-if="calendyData.length > 0">
        <swiper-slide v-for="(slide, index) in calendyData" :key="index">
          <p>{{ slide.date }}</p>
          <p>{{ slide.weekDay }}</p>
        </swiper-slide>
      </template>
    </Scroller>
    <div :class="$style.eventsWrapper">
      <EventCard v-for="(event, index) in getActiveEvents" :key="index" :event-data="event" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Scroller from '~/components/common/Scroller.vue';
import { SwiperSlide } from 'swiper/vue';
import EventCard from '~/components/common/EventCard.vue';

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

const activeIndex = ref(1);

const getActiveEvents = computed(() => {
  return props.calendyData[activeIndex.value]?.events || [];
});

const onSlideChanged = (index: number) => {
  activeIndex.value = index;
  console.log('Текущий слайд:', index);
};
</script>

<style scoped lang="scss" module>
.calendyWrapper {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: auto;
  max-width: 42rem;
  height: auto;
  min-height: 50rem;
  padding: 2rem 0.9rem;
  box-shadow: 2px 2px 5px 4px rgb(153 155 168 / 15%);
  border-radius: 1.2rem;
}

:global(.swiper-slide) {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 105px;
  padding: 12px;
  text-align: center;
  font-size: 12px;
  flex-direction: column;
  gap: 10px;
}

:global(.swiper-slide-active) {
  border-radius: 10px;
  border: 2px solid $dark-blue;
}

.eventsWrapper {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
</style>
