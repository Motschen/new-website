import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import icon from "astro-icon"

// https://astro.build/config
export default defineConfig({
  site: 'https://www.midnightdust.eu',
  compressHTML: true,
  integrations: [mdx(), icon(), tailwind({
    applyBaseStyles: false,
  })],
})
