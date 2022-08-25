<template>
  <div class="company-bar" v-if="!this.getNewsRequestStatus && !this.getNewsError">
    <div v-for="item in this.getNewsList" :key="item.id">
      <NewsCard :title=item.title :text=item.text :tag=item.tag  :src="item.img"/>
    </div>
    <div class="warn" v-if="!this.getNewsList.length">
      <p>Нет данных</p>
    </div>
  </div>
  <div class="err" v-if="!this.getNewsRequestStatus && this.getNewsError" :errorMessage="this.getNewsError">
    <p class="err-mess">
      {{ errorMessage }}
    </p>
  </div>
  <div class="loader" v-if="this.getNewsRequestStatus" :status="this.getNewsRequestStatus">
  {{ status }}
  </div>
</template>

<script>
import NewsCard from '../components/NewsCard.vue'
import { mapActions, mapGetters } from 'vuex'


export default {
  name: 'MainPage',
  components: {
    NewsCard
  },

  computed: {
    ...mapGetters([
      'getNewsList',
      'getNewsRequestStatus',
      'getNewsError'
    ])
  },
  methods: {
    ...mapActions([
      'requestListOfNews'
    ])
  },
  mounted () {
    this.requestListOfNews()
  }
}
</script>

<style>
.company-bar {
  display: flex;
  gap: 20px;
  padding: 40px;
}

.loader {
  margin-top: 250px;
  margin-left: 50%;
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.err-mess {
  color: black;
  border: 3px red;
  background-color: red;
}
</style>
