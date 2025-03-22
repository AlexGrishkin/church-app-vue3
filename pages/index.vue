<template>
  <div :class="$style.mainContentWrapper">
    <h1 :class="$style.mainContentTitle">Календарь</h1>
    <Calendy :calendy-data="eventsData" />
  </div>
</template>

<script setup lang="ts">
import Calendy from '~/components/common/Calendy.vue';

const eventsData = ref([]); // Массив для хранения данных

const getEvents = async () => {
  try {
    const res = await $fetch('api/events');
    // Функция для получения дня недели
    const getDayOfWeek = (dateStr) => {
      const date = new Date(dateStr);
      return date.toLocaleDateString('ru-RU', { weekday: 'long' });
    };

    // Функция для форматирования числа и месяца
    const getFormattedDate = (dateStr) => {
      const date = new Date(dateStr);

      return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });
    };

    // Группируем события по дням
    const groupedEvents = res.reduce((acc, event) => {
      const weekDay = getDayOfWeek(event.date);
      const formattedDate = getFormattedDate(event.date);

      // Ищем или создаем запись для конкретного дня
      const dayEntry = acc.find((entry) => entry.date === formattedDate);
      if (dayEntry) {
        dayEntry.events.push(event);
      } else {
        acc.push({
          weekDay,
          date: formattedDate,
          events: [event],
        });
      }

      return acc;
    }, []);

    eventsData.value = groupedEvents; // Присваиваем данные в ref

    // eventsData.value = groupedEvents;
  } catch (error) {
    console.error('Ошибка при загрузке событий:', error);
  }
};

onMounted(() => {
  getEvents();
});
</script>
<style lang="scss" module>
.mainContentWrapper {
  width: 100%;
}

.mainContentTitle {
  margin-bottom: 2rem;
  white-space: normal;
  color: $primary;

  @include Title;
}
</style>
