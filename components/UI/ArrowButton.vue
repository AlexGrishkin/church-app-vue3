<template>
  <div :class="$style.buttonWrapper">
    <nuxt-img :class="[$style.buttonImg, classList]" :src="props.source" />
  </div>
</template>

<script setup lang="ts">
const $style = useCssModule();
const props = defineProps({
  rotate: {
    type: String,
    default: '',
  },
  source: {
    type: String,
    default: '/arrow.svg',
  },
});

const classList = computed(() => [
  {
    [$style[`_${props.rotate}`]]: props.rotate,
  },
]);
</script>

<style scoped lang="scss" module>
.buttonWrapper {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}

.buttonImg {
  display: block;
  width: 100%;
  max-width: 2.6rem;
  height: 100%;
  max-height: 2.6rem;

  &._right {
    transform: rotate(180deg);
  }
}
</style>
