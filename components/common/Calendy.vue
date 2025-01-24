<template>
  <div :class="$style.calendyWrapper">
    <Scroller />
  </div>
</template>

<script setup lang="ts">
import Scroller from '~/components/common/Scroller.vue';
</script>

<style scoped lang="scss" module>
.calendyWrapper {
  width: 42rem;
  height: auto;
}
</style>
