<template>
    <div class="content-block">
        <div class="info-block">
            <div class="picture">
                <img class="cat-img" :src="img">
                <h2>{{ title }}</h2>
                <div class="description">{{ text }}</div>
                <div class="tag">#: {{ tag }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NewsCard',
  props: {
    title: String,
    img: String || null,
    text: String,
    tag: String
  }
}
</script>

<style>
.picture {
    margin-top: 30px;
}

.info-block {
    display: flex;
    justify-content: space-around;
    width: 458px;
    height: 257px;
    border: solid 1px;
    border-radius: 52px;
}

.cat-img {
    width: 120px;

    margin-left: -60px;
    margin-top: 32px;
}

.content-block {
    margin-top: 50px;
    display: flex;
    align-items: center;
}

.text-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 370px;
}

h2 {
    font-size: 16px;
}

.description {
    width: 350px;
    display: flex;
    overflow-wrap: anywhere;
    height: 100px;
}

.tag {
    font-style: italic;
    display: flex;
}
</style>
