<template>
  <div :class="$style.navigationLinksWrapper">
    <NavigationLogo :class="$style.navLogo" />
    <div :class="$style.navLinkTop">
      <NavLink
        v-for="nav in NAVIGATION_CONFIG"
        :key="nav.id"
        :link-data="nav"
        data-allow-mismatch
        size="base"
      />
    </div>
  </div>
</template>

<script setup>
import NavLink from '~/components/common/NavLink.vue';
import NavigationLogo from '~/components/common/NavigationLogo.vue';

defineOptions({
  name: 'TheNavigationMenu',
});

const NAVIGATION_CONFIG = [
  {
    link: '/',
    title: 'Главная',
    imgSrc: '/main.svg',
    id: '1',
  },
  {
    link: '/personal',
    title: 'Личный кабинет',
    imgSrc: '/Personal.svg',
    id: '2',
  },
  {
    link: '/events',
    title: 'Мероприятия',
    imgSrc: '/Events.svg',
    id: '3',
  },
  {
    link: '/institutions',
    title: 'Учреждения',
    imgSrc: '/Institutions.svg',
    id: '4',
  },
  {
    link: '/news',
    title: 'Новости',
    imgSrc: '/News.svg',
    id: '5',
  },
];
</script>

<style module lang="scss">
.navigationLinksWrapper {
  position: sticky;
  top: 0;
  display: flex;
  width: 32rem;
  height: 100vh;
  padding: 3rem 2rem;
  flex-direction: column;
  background-color: $light-blue-2;

  @include respond-to(tablet) {
    position: fixed;
    top: auto;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 9.3rem;
    padding: 1rem 2rem;
  }
}

.navLogo {
  @include respond-to(tablet) {
    display: none;
  }
}

.navLinkTop {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @include respond-to(tablet) {
    flex-direction: row;
  }

  @include respond-to(mobile) {
    height: 100%;
  }
}
</style>
