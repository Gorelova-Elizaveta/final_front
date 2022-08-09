<template>
  <div class="header">
    <div class="header_link-home">
      <span class="link-to-main">На главную</span>
      <h1 class="title-news">Lenta</h1>
    </div>
    <div>
      <button class="entry">Вход</button>
      <button>Регистрация</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background-color: #3ee53344;
  display: flex;
  justify-content: space-around;
}

.title-news {
  display: inline;
  font-size: 44px;
}

.link-to-main {
  padding-right: 145px;

}

.entry {
  padding-right: 45px;
}
</style>
