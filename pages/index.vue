<template>
  <div>
    <h1>Main</h1>
    <Swiper/>
  </div>
</template>

<script setup lang="ts">
import Swiper from '~/components/common/Swiper.vue';
</script>
<style lang="scss" module>
h1 {
  @include Title;

  color: $primary;
}
</style>
