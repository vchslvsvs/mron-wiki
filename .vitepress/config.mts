import { defineConfig } from 'vitepress'
export default {
  ignoreDeadLinks: true
}
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MRON Wiki",
  description: "All answers to your questions",
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
          { text: 'Navigation', link: 'wiki/navigation' },
          { text: 'About MRON', link: 'wiki/about-us' },
        ]
      },
      {
        text: 'MW19 (Cracked)',
        items: [
          { text: 'Crack and MRON Mod Info', link: 'wiki/crack/mronmod' },
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
          { text: 'MW19 Crack', link: 'wiki/error-fixes/crack' },
          { text: 'MW19 Retail', link: 'wiki/error-fixes/retail' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ma3axucTKa/MRON-Mod' },
      { icon: 'discord', link: 'https://discord.gg/mronwarzone' }
    ]
  }
})
