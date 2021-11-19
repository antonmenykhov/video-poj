<template>
<section class="main-info">
    <div class="container">
        <div class="main-info__slider">
            <el-carousel height="400px" trigger="click">
                <el-carousel-item v-for="image in images" :key="image">
                    <img :src="image" alt="Видеонаблюдение">
                </el-carousel-item>
            </el-carousel>
            <div class="orange-line"></div>
        </div>
        <div class="main-info__text">
            <h3 class="title">{{name}}</h3>
            <p class="description"  v-html="description"></p>
        </div>
    </div>
</section>
</template>

<script>
export default {
    props: {
        images: Array,
        description: String,
        name: String
    }
}
</script>

<style>
.el-carousel__item img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    
}
.el-carousel{
    border-radius: 20px;
    overflow: hidden;
}
.main-info__slider, .main-info__text{
    flex: 1 1 300px;
    margin: 50px 0;
}
.main-info__text{
    padding: 50px;
}
.main-info__text .description{
    margin-bottom: 0;
}
.main-info__slider{
    
    position: relative;
}
</style>
