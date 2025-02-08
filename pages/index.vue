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
    events: [
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
    events: [
      {
        name: 'Служба3',
        description: 'Собираемся на службу',
        timeStart: '9:00',
        timeEnd: '11:00',
      },
      {
        name: 'Служба4',
        description: 'Собираемся на службу2',
        timeStart: '10:00',
        timeEnd: '12:00',
      },
      {
        name: 'Служба44',
        description: 'Собираемся на службу2',
        timeStart: '10:00',
        timeEnd: '12:00',
      },
      {
        name: 'Служба45',
        description: 'Собираемся на службу2',
        timeStart: '10:00',
        timeEnd: '12:00',
      },
    ],
  },
  {
    date: '04 января',
    weekDay: 'вторник',
    events: [
      {
        name: 'Служба5',
        description: 'Собираемся на службу',
        timeStart: '9:00',
        timeEnd: '11:00',
      },
      {
        name: 'Служба6',
        description: 'Собираемся на службу2',
        timeStart: '10:00',
        timeEnd: '12:00',
      },
    ],
  },
  {
    date: '05 января',
    weekDay: 'среда',
    events: [
      {
        name: 'Служба7',
        description: 'Собираемся на службу',
        timeStart: '9:00',
        timeEnd: '11:00',
      },
      {
        name: 'Служба8',
        description: 'Собираемся на службу2',
        timeStart: '10:00',
        timeEnd: '12:00',
      },
    ],
  },
  {
    date: '06 января',
    weekDay: 'четверг',
    events: [
      {
        name: 'Служба9',
        description: 'Собираемся на службу',
        timeStart: '9:00',
        timeEnd: '11:00',
      },
      {
        name: 'Служба10',
        description: 'Собираемся на службу2',
        timeStart: '10:00',
        timeEnd: '12:00',
      },
    ],
  },
  {
    date: '07 января',
    weekDay: 'пятница',
    events: [
      {
        name: 'Служба11',
        description: 'Собираемся на службу',
        timeStart: '9:00',
        timeEnd: '11:00',
      },
      {
        name: 'Служба12',
        description: 'Собираемся на службу2',
        timeStart: '10:00',
        timeEnd: '12:00',
      },
    ],
  },
  {
    date: '08 января',
    weekDay: 'суббота',
    events: [
      {
        name: 'Служба13',
        description: 'Собираемся на службу',
        timeStart: '9:00',
        timeEnd: '11:00',
      },
      {
        name: 'Служба14',
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
