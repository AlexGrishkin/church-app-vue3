<template>
  <div :class="$style.calendyWrapper">
    <Swiper />
  </div>
</template>

<script setup lang="ts">
import Swiper from '~/components/common/Swiper.vue';
</script>

<style scoped lang="scss" module>
.calendyWrapper {
  width: 42rem;
}
</style>
