
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import '@shikijs/vitepress-twoslash/style.css'
import './styles/vars.css'
import './styles/landing.css'
import SvgImage from './components/SvgImage.vue'
import 'virtual:group-icons.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
    })
  },
  enhanceApp({ app }) {
    app.component('SvgImage', SvgImage)
    app.use(TwoslashFloatingVue)
  },
} satisfies Theme
