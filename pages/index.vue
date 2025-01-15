<template>
  <div>
    <h1>
      Mainddddddddd dddddddddddddddddddddddd ddddddddddd ddddddddddddddddd
      dddddddddddddddddddddddddddd ddddddddddddddddddddddddd dddddddddddddddddddddddd
      dddddddddddddddddd dddddddddddddd ddddddddddddddddddddddd dddddccccccccccccccc
      ccccccccccccccccccc ccccccccccccccc ccccccddd ddddddddddddddddd
    </h1>
    <Calendy />
  </div>
</template>

<script setup lang="ts">
import Calendy from '~/components/common/Calendy.vue';
</script>
<style lang="scss" module>
h1 {
  @include Title;

  white-space: normal;
  color: $primary;
}
</style>
