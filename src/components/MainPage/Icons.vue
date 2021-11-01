<template>
<section class="icons">
    <div class="container">
        <div class="icons-holder">
            <div v-for="item,i in services" :key="i" class="icon-wrapper">
                <div class="icon"><img :src="'./img/icons/'+item.icon" alt=""></div>
                <h6 class="icon-name">{{item.name}}</h6>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            services: [{
                    name: 'Видеонаблюдение',
                    icon: 'video.png',
                    link: ''
                },
                {
                    name: 'Контроль доступа',
                    icon: 'skud.png',
                    link: ''
                },
                {
                    name: 'Пожарная сигнализация',
                    icon: 'poj.png',
                    link: ''
                },
                {
                    name: 'Охранная сигнализация',
                    icon: 'ohr.svg',
                    link: ''
                },
                {
                    name: 'Домофония',
                    icon: 'domofon.png',
                    link: ''
                },
            ]
        }
    },
}
</script>

<style>
section.icons {
    position: relative;
    margin-top: -50px;
    z-index: 100;
}

.icons-holder {
    width: 100%;
    background: white;
    box-shadow: 0 0 30px rgb(0 0 0 / 10%);
    border-radius: 16px;
    padding: 40px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.icon-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 1 150px;
    margin: 0 20px;
    cursor: pointer;
}

.icon-wrapper .icon {
    height: 70px;
    width: 100%;
}

.icon img {
    height: 100%;
    width: 100%;
    object-fit: contain;
}

.icon-wrapper .icon-name {
    font-size: 18px;
    font-weight: 800;
    margin-top: 20px;
    color: #333;
    text-align: center;
    transition: all .2s;
}
.icon-wrapper:hover .icon-name{
    color: #e2c445
}
</style>
