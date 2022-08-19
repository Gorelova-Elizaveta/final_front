import { createStore } from 'vuex'

import news from './modules/news'

export const store = createStore({
  modules: {
    news
  }
})
