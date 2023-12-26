<template>
  <div class="min-h-screen flex flex-col">
    <header class="p-10 bg-gradient-to-tr from-teal-800 to-teal-600 shadow-md flex flex-col justify-center items-center">
      <h1 class="font-bold text-3xl text-white mb-2">DHKO</h1>
      <h2 class="text-xl text-white">Norsk nettverk for digital humaniora og kulturorganisasjon</h2>
            <ContentNavigation v-slot="{ navigation }">
        <nav class="mt-5 ">
          <ul class="flex space-x-4">
            <li><NuxtLink class="text-white hover:text-tertiary" to="/">Hovedsiden</NuxtLink></li>
            <li v-for="link of navigation" :key="link._path">
              <NuxtLink :to="link._path" class="text-white hover:text-tertiary">{{ link.title }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </ContentNavigation>  
    </header>
    <main class="container mx-auto p-10">
    <NuxtPage/>
    </main>
    <footer class="p-5 bg-orange-100 shadow-md">
      <p class="text-slate-800">&copy; 2022 DHKO</p>
    </footer>
  </div>
</template>