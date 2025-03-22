<template>
  <div :class="$style.eventWrapper">
    <h3 :class="$style.eventName">{{ eventData.title }}</h3>
    <p :class="$style.eventDescription">{{ shortDescription }}</p>
    <p :class="$style.eventTime">{{ startTime }} - {{ endTime }}</p>
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

const shortDescription = computed(() => {
  return props.eventData.description.length > 100
    ? props.eventData.description.slice(0, 100) + '...'
    : props.eventData.description;
});

const startTime = computed(() => {
  return props.eventData.startTime?.slice(0, 5);
});

const endTime = computed(() => {
  return props.eventData.endTime?.slice(0, 5);
});
</script>

<style scoped lang="scss" module>
.eventWrapper {
  display: grid;
  grid-template-rows: 17% 1fr 8%;
  width: 100%;
  max-width: 12.7rem;
  height: 18.4rem;
  padding: 1.2rem;
  border-radius: 2rem;
  border: 2px solid $grey;
  gap: 0.8rem;
}

.eventName {
  overflow: hidden;
  display: -webkit-box;
  align-self: start;
  height: min-content;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.eventDescription {
  overflow: hidden;
  display: -webkit-box;
  align-self: start;
  text-overflow: ellipsis;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  color: $dark-grey;

  @include textSmall;
}

.eventTime {
  align-self: end;
  font-weight: 600;

  @include textSmall;
}
</style>
