import { createStore } from 'vuex'

import news from './modules/news';
import authModule from './modules/authModule';

export const store = createStore({
  modules: {
    news,
    authModule
  }
})
