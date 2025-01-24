<template>
  <div :class="$style.Container">
    <LayoutTheNavigationMenu />
    <div :class="$style.mainContent">
      <div :class="$style.pageContainer">
        <nuxt-page />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style lang="scss" module>
.Container {
  display: flex;
}

.mainContent {
  width: calc(100vw - 32rem);
}

.pageContainer {
  width: 100%;
  padding: 3rem;
}
</style>
