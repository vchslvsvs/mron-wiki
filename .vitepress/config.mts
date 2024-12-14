import { defineConfig } from 'vitepress'

<<<<<<< HEAD
 // https://vitepress.dev/reference/site-config
export default { defineConfig }
  title: "MRON Wiki",
  description; "All answers to your questions",
=======
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MRON Wiki v1.0.0",
  description: "All answers to your questions",
  ignoreDeadLinks: true,
  base: "/mron-wiki/",
>>>>>>> parent of 6853738 (Update config.mts)
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Wiki', link: '/wiki' }
    ],

    sidebar: [
      {
        text: 'Welcome',
        items: [
<<<<<<< HEAD
          { text: 'Navigation', link: 'wiki/navigation' },
          { text: 'About MRON', link: 'wiki/about-us' },
=======
          { text: 'Navigation', link: '/wiki/navigation' },
          { text: 'About MRON', link: '/wiki/about-us' },
>>>>>>> parent of 6853738 (Update config.mts)
        ]
      },
      {
        text: 'MW19 (Cracked)',
        items: [
<<<<<<< HEAD
          { text: 'Crack and MRON Mod Info', link: 'wiki/crack/mronmod' },
=======
          { text: 'Crack and MRON Mod Info', link: '/wiki/crack' },
>>>>>>> parent of 6853738 (Update config.mts)
        ]
      },
      {
        text: 'MW19 (Retail)',
        items: [
          { text: 'Retail Info', link: 'wiki/retail' },
        ]
      },
      {
        text: 'Common error fixes',
        items: [
<<<<<<< HEAD
          { text: 'MW19 Crack', link: 'wiki/error-fixes/crack' },
          { text: 'MW19 Retail', link: 'wiki/error-fixes/retail' }
=======
          { text: 'MW19 Crack', link: '/wiki/error-fixes/crack' },
          { text: 'MW19 Retail', link: '/wiki/error-fixes/retail' },
          { text: 'Launcher', link: "/wiki/error-fixes/launcher"}
>>>>>>> parent of 6853738 (Update config.mts)
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ma3axucTKa/MRON-Mod' },
      { icon: 'discord', link: 'https://discord.gg/mronwarzone' }
    ]
  }
})
