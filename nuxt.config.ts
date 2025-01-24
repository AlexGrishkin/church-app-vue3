// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true, // Убедитесь, что SSR включен
  vue: {
    config: {
      productionTip: false, // Убирает отладочные комментарии
      devtools: false, // Отключает Vue DevTools
    },
    compilerOptions: {
      comments: false, // Убирает отладочные комментарии в шаблонах
    },
  },
  components: true, // Автоимпорт компонентов
  modules: [
    '@vueuse/nuxt',
    '@nuxt/fonts',
    '@nuxt/image',
    '@pinia/nuxt',
    'dayjs-nuxt',
    'nuxt-file-storage',
    '@nuxt/eslint',
    'nuxt-typed-router',
  ],
  families: [
    { name: 'montserrat', provider: 'google' },
    { name: 'geist', provider: 'google' },
  ],
  css: ['~/assets/scss/global.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
        @use "~/assets/scss/_vars.scss" as *;
        @use "~/assets/scss/_mixins.scss" as *;
        `,
        },
      },
    },
  },
});
