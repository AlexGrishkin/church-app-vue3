<template>
  <div :class="$style.mainContentWrapper">
    <Calendy :calendy-data="calendyData" />
  </div>
</template>

<script setup lang="ts">
import Calendy from '~/components/common/Calendy.vue';

const calendyData = [
  {
    date: '02 января',
    weekDay: 'воскресенье',
    event: [
      {
        name: 'Служба',
        description: 'Собираемся на службу',
        timeStart: '9:00',
        timeEnd: '11:00',
      },
      {
        name: 'Служба2',
        description: 'Собираемся на службу2',
        timeStart: '10:00',
        timeEnd: '12:00',
      },
    ],
  },
  {
    date: '03 января',
    weekDay: 'понедельник',
    event: [
      {
        name: 'Служба',
        description: 'Собираемся на службу',
        timeStart: '9:00',
        timeEnd: '11:00',
      },
      {
        name: 'Служба2',
        description: 'Собираемся на службу2',
        timeStart: '10:00',
        timeEnd: '12:00',
      },
    ],
  },
  {
    date: '04 января',
    weekDay: 'вторник',
    event: [
      {
        name: 'Служба',
        description: 'Собираемся на службу',
        timeStart: '9:00',
        timeEnd: '11:00',
      },
      {
        name: 'Служба2',
        description: 'Собираемся на службу2',
        timeStart: '10:00',
        timeEnd: '12:00',
      },
    ],
  },
  {
    date: '05 января',
    weekDay: 'среда',
    event: [
      {
        name: 'Служба',
        description: 'Собираемся на службу',
        timeStart: '9:00',
        timeEnd: '11:00',
      },
      {
        name: 'Служба2',
        description: 'Собираемся на службу2',
        timeStart: '10:00',
        timeEnd: '12:00',
      },
    ],
  },
  {
    date: '06 января',
    weekDay: 'четверг',
    event: [
      {
        name: 'Служба',
        description: 'Собираемся на службу',
        timeStart: '9:00',
        timeEnd: '11:00',
      },
      {
        name: 'Служба2',
        description: 'Собираемся на службу2',
        timeStart: '10:00',
        timeEnd: '12:00',
      },
    ],
  },
  {
    date: '07 января',
    weekDay: 'пятница',
    event: [
      {
        name: 'Служба',
        description: 'Собираемся на службу',
        timeStart: '9:00',
        timeEnd: '11:00',
      },
      {
        name: 'Служба2',
        description: 'Собираемся на службу2',
        timeStart: '10:00',
        timeEnd: '12:00',
      },
    ],
  },
  {
    date: '08 января',
    weekDay: 'суббота',
    event: [
      {
        name: 'Служба',
        description: 'Собираемся на службу',
        timeStart: '9:00',
        timeEnd: '11:00',
      },
      {
        name: 'Служба2',
        description: 'Собираемся на службу2',
        timeStart: '10:00',
        timeEnd: '12:00',
      },
    ],
  },
];
</script>
<style lang="scss" module>
.mainContentWrapper {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
}

h1 {
  @include Title;

  white-space: normal;
  color: $primary;
}
</style>
