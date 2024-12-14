  title: "MRON Wiki v1.0.0",
  description: "All answers to your questions",
  ignoreDeadLinks: true,
  base: "/mron-wiki",
  base: "/mron-wiki/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [

@@ -17,14 +17,14 @@ export default defineConfig({
      {
        text: 'Welcome',
        items: [
          { text: 'Navigation', link: 'wiki/navigation' },
          { text: 'About MRON', link: 'wiki/about-us' },
          { text: 'Navigation', link: '/wiki/navigation' },
          { text: 'About MRON', link: '/wiki/about-us' },
        ]
      },
      {
        text: 'MW19 (Cracked)',
        items: [
          { text: 'Crack and MRON Mod Info', link: 'wiki/crack' },
          { text: 'Crack and MRON Mod Info', link: '/wiki/crack' },
        ]
      },
      {

@@ -36,9 +36,9 @@ export default defineConfig({
      {
        text: 'Common error fixes',
        items: [
          { text: 'MW19 Crack', link: 'wiki/error-fixes/crack' },
          { text: 'MW19 Retail', link: 'wiki/error-fixes/retail' },
          { text: 'Launcher', link: "wiki/error-fixes/launcher"}
          { text: 'MW19 Crack', link: '/wiki/error-fixes/crack' },
          { text: 'MW19 Retail', link: '/wiki/error-fixes/retail' },
          { text: 'Launcher', link: "/wiki/error-fixes/launcher"}
        ]
      }
    ],