import { defineClientAppEnhance } from '@vuepress/client'
import Cat from './cat.vue'

export default defineClientAppEnhance(({ app, router, siteData }) =>
  app.component('Cat',Cat)
)
