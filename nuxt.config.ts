// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/devtools',
    ['@nuxtjs/supabase', {}],
    [
      '@pinia/nuxt',
      {
        // ? https://pinia.vuejs.org/ssr/nuxt.html
        autoImports: ['defineStore'],
      },
    ],
    [
      '@pinia-plugin-persistedstate/nuxt',
      {
        // ? https://prazdevs.github.io/pinia-plugin-persistedstate/frameworks/nuxt-3.html
        cookieOptions: {
          sameSite: 'strict',
        },
        storage: 'cookies',
      },
    ],
    'nuxt-typed-router', // ? https://nuxt-typed-router.vercel.app
  ],
  extends: [
    'nuxt-seo-kit', // ? https://github.com/harlan-zw/nuxt-seo-kit
  ],
})
