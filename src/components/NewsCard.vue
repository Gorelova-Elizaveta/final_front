<template>
    <div class="content-block">
        <div class="info-block">
            <div class="picture">
                <img class="cat-img" src="../assets/cat.jpg">

            </div>
            <div class="text-info">
                <h2>Title</h2>
                <span></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NewsCard'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.info-block {
    display: flex;
    justify-content: space-around;
    width: 600px;
    height: 200px;
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
    flex-direction: column;
    align-items: center;
}
.text-info{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
