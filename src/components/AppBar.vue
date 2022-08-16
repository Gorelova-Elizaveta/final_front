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

<style scoped>
.header {
  background-color: #3ee53344;
  display: flex;
  justify-content: space-around;
}

.link-to-main {
  padding-right: 145px;
}

.entry {
  padding-right: 45px;
}
</style>
