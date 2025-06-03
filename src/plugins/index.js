import vuetify from './vuetify'
import pinia from '@/stores'
import router from '@/router/router'

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
}
