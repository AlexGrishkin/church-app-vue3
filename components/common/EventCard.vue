<template>
  <div :class="$style.eventWrapper">
    <h3 :class="$style.eventName">{{ eventData.name }}</h3>
    <p :class="$style.eventDescription">{{ eventData.description }}</p>
    <p :class="$style.eventTime">{{ eventData.timeStart }} - {{ eventData.timeEnd }}</p>
  </div>
</template>

<script setup lang="ts">
interface EventProps {
  name: string;
  description: string;
  timeStart: string;
  timeEnd: string;
}

const props = defineProps({
  eventData: {
    type: Object as PropType<EventProps>,
    required: true,
  },
});
</script>

<style scoped lang="scss" module>
.eventWrapper {
  display: flex;
  width: 100%;
  max-width: 12.7rem;
  padding: 1.2rem;
  border-radius: 2rem;
  border: 2px solid $grey;
  flex-direction: column;
  gap: 0.8rem;
}
</style>
