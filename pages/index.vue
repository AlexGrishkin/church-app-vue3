<template>
  <div :class="$style.mainContentWrapper">
    <Calendy />
  </div>
</template>

<script setup lang="ts">
import Calendy from '~/components/common/Calendy.vue';
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
