<template>
  <div :class="$style.logoWrapper">
    <nuxt-img src="/logo.svg" :class="$style.imgLogo" />
    <p :class="$style.logoTitle">Церковь</p>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" module>
.logoWrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 8.4rem;
  margin-bottom: 5rem;

  @include respond-to(desktop) {
    height: 6.4rem;
    grid-template-columns: 6.7rem 11.9rem;
  }

  @include respond-to(tablet) {
    width: auto;
    height: 100%;
    margin-right: auto;
    margin-bottom: 0;
  }
}

.imgLogo {
  display: flex;
  align-items: start;
  height: 100%;
}

.logoTitle {
  font-size: 3rem;
  line-height: 3.4rem;
  font-weight: 700;
}
</style>
