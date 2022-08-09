<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <AppBar />
  <NewsCard/>
</template>

<script>
import AppBar from '../components/AppBar.vue'
import NewsCard from '../components/NewsCard.vue'

export default {
  name: 'MainPage',
  components: {
    AppBar,
    NewsCard
  }
}
</script>
