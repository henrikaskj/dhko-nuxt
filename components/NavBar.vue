<template>
    <nav v-if="navigation">
        <ul class="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 text-center lg:text-xl">
        <li v-for="link of navigation[0].children.filter(item => !item.children)" :key="i18n.locale.value + '/' +  link._path">
            <NuxtLink :to=" link._path" class="text-slate-50 hover:text-slate-300 whitespace-nowrap">{{ link.title }}</NuxtLink>
        </li>
        </ul>
    </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const i18n = useI18n()

const queryBuilder = queryContent(i18n.locale.value)
const { data: navigation } = await useAsyncData('navigation_' + i18n.locale.value, () => fetchContentNavigation(queryBuilder))
</script>