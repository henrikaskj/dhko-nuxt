<template>
  <div class="min-h-screen flex flex-col" :key="i18n.locale">

    <header class="p-10 bg-gradient-to-tr bg-slate-700 shadow-sm  flex flex-col justify-center items-center">
      <nav class="absolute top-0 right-2 p-4">
        <NuxtLink v-if="$i18n.locale != 'en'" lang="en" class="text-slate-50 no-underline flex items-center gap-1" :to="switchLocalePath('en')"><LocaleIcon/>English</NuxtLink>
        <NuxtLink v-if="$i18n.locale != 'no'" lang="no" class="text-slate-50 no-underline flex items-center gap-1" :to="switchLocalePath('no')"><LocaleIcon/>Norsk</NuxtLink> 
      </nav>
      <h1 class="font-bold text-3xl lg:text-4xl text-slate-50   mb-2">DHKO</h1>
      <h2 class="text-xl lg:text-2xl text-slate-50">{{$t('description')}}</h2>
            <div class="mt-5 min-h-[2rem]">
            <NavBar :key="i18n.locale.value"/>
            </div>
    </header>
    <main class="container mx-auto p-10">
    <NuxtPage/>
    </main>
    <footer class="p-5 bg-slate-100 text-center">
      <p class="text-slate-800">&copy; 2022 DHKO</p>
    </footer>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const route = useRoute()
const i18n = useI18n()

const titleTemplate = (titleChunk) => {
  return route.params.slug ? `${titleChunk} - dhko.no` : 'dhko.no';

}
useHead({
    titleTemplate,
    htmlAttrs: {
      lang: i18n.locale.value
    }
})


</script>