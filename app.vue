<template>
  <div class="min-h-screen flex flex-col" :key="i18n.locale">

    <header class="p-10 bg-gradient-to-tr bg-slate-100 shadow-md flex flex-col justify-center items-center">
      <nav class="absolute top-0 right-0 p-4">
        <NuxtLink v-if="$i18n.locale != 'en'" lang="en" class="text-teal-700 no-underline flex items-center gap-1" :to="switchLocalePath('en')" @click="setLocale('en')"><LocaleIcon/>English</NuxtLink>
        <NuxtLink v-if="$i18n.locale != 'no'" lang="no" class="text-teal-700 no-underline flex items-center gap-1" :to="switchLocalePath('no')" @click="setLocale('no')"><LocaleIcon/>Norsk</NuxtLink> 
      </nav>
      <h1 class="font-bold text-3xl text-teal-700 mb-2">DHKO</h1>
      <h2 class="text-xl text-teal-900">{{$t('description')}}</h2>
            <NavBar :key="i18n.locale"/>
    </header>
    <main class="container mx-auto p-10">
    <NuxtPage/>
    </main>
    <footer class="p-5 bg-amber-100 shadow-md">
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