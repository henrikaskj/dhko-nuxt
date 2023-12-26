export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  content: {
    markdown: {
      anchorLinks: false
    },
    sources: {

      github: {
        prefix: '/blog', // Prefix for routes used to query contents
        driver: 'github', // Driver used to fetch contents (view unstorage documentation)
        repo: "brusboks/DHKO",
        branch: "main",
        dir: "", // Directory where contents are located. It could be a subdirectory of the repository.
        // Imagine you have a blog inside your content folder. You can set this option to `content/blog` with the prefix option to `/blog` to avoid conflicts with local files.
      },
    }
  }
})