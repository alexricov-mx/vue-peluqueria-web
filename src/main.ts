import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// @ts-ignore
import { aliases,mdi } from 'vuetify/lib/iconsets/mdi'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi
      }
    },
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: '#9F2241',
            secondary: '#BC955C',
            info: '#6F7271',
            success: '#235B4E',
            warning: '#FB8C00',
            error: '#C62828'
          }
        }
      },
      variations: {
        colors: ['primary', 'secondary'],
        lighten: 5,
        darken: 4
      },
      defaultTheme: 'light'
    }
  })

const app = createApp(App)

app.use(vuetify)

app.use(router)

app.mount('#app')
