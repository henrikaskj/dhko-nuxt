<template>
    <nav class="mt-5 " v-if="navigation">
        <ul class="flex space-x-4">
        <li v-for="link of navigation[0].children" :key="i18n.locale + '/' +  link._path">
            <NuxtLink :to="'/' + $i18n.locale + link._path" class="text-teal-900 hover:text-teal-600">{{ link.title }}</NuxtLink>
        </li>
        </ul>
    </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const i18n = useI18n()

let navigation = ref([])

const fetchNavigation = async () => {
  const queryBuilder = queryContent(i18n.locale.value)
  const { data } = await useAsyncData(`navigation-${i18n.locale}`, () => fetchContentNavigation(queryBuilder))
  navigation.value = data.value
}

// Fetch navigation data initially
fetchNavigation()

// Update navigation data when locale changes
watch(i18n.locale, fetchNavigation)
</script>