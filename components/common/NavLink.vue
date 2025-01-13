<template>
  <div :class="[$style.navLinkWrapper, { [$style._activeLink]: isActiveLink }, classList]">
    <NuxtLink :href="linkData.link" :class="$style.navLink">
      <!--      возможно стоит сюда прикрутить модуль для иконок-->
      <nuxt-img preload :class="$style.navImg" :src="linkData.imgSrc" />
      <p v-if="linkData.title" :class="$style.navTitle">{{ linkData.title }}</p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
interface LinkProps {
  id?: number | string;
  link: string;
  imgSrc: string;
  title?: string;
}

const props = defineProps({
  linkData: {
    type: Object as PropType<LinkProps>,
    required: true, // Указываем, что этот пропс обязателен
  },
  size: {
    type: String as PropType<'base' | 'small'>,
    default: 'base',
  },
  borderColor: {
    type: String as PropType<'transparentBorder' | 'greyBorder'>,
    default: 'transparentBorder',
  },
});
const $style = useCssModule();
const route = useRoute();
const isActiveLink = computed(() => route.path === props.linkData.link);
const classList = computed(() => [
  {
    [$style[`_${props.size}`]]: props.size,
    [$style[`_${props.borderColor}`]]: props.borderColor,
  },
]);
</script>

<style module lang="scss">
.navLinkWrapper {
  display: flex;
  align-items: center;
  border-radius: 3rem;
  outline: 1px solid transparent;

  &._transparentBorder {
    outline: 1px solid transparent;
  }

  &._greyBorder {
    outline: 1px solid $grey;
  }

  &._base {
    width: 100%;
    height: 5.4rem;

    @include respond-to(tablet) {
      height: auto;
    }
  }

  &._small {
    width: 5.4rem;
    height: 5.4rem;
  }

  @include respond-to(tablet) {
    height: 7rem;
  }

  @include respond-to(mobile) {
    height: 7.4rem;
  }

  &:not(._activeLink) {
    transition: outline 0.5s;

    &:hover {
      outline: 1px solid $grey;
      cursor: pointer;
    }
  }

  &._activeLink {
    background-color: $light-blue;

    .navLink {
      .navImg {
        filter: brightness(0) saturate(100%) invert(18%) sepia(28%) saturate(5170%) hue-rotate(199deg) brightness(99%) contrast(107%);
      }
    }

    .navTitle {
      color: $dark-blue;
    }
  }
}

.navLink {
  display: flex;
  gap: 1.4rem;
  width: 100%;
  height: 100%;
  padding: 1.5rem;

  .navImg {
    width: 2.4rem;
    height: 2.4rem;
  }

  @include respond-to(tablet) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    gap: 0.5rem;
  }

  .navTitle {
    font-family: Geist, sans-serif;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 2.4rem;

    @include respond-to(mobile) {
      display: none;
    }
  }
}
</style>
