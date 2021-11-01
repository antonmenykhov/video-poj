<template>
<div class="top-line">
    <div class="container">
        <div class="logo">
            <div class="logo-img"></div>
            <div class="logo-text">
                <h2>ReGuard</h2><span>CCTV and security</span>
            </div>
        </div>
        <div class="menu">
            <ul class="main-menu">
                <li v-for="item,i in menu" :key="i" class="menu-item">
                    <a href="">{{item.name}}</a>
                    <ul v-if="item.submenu" class="sub-menu">
                        <li v-for="subitem,i in item.submenu" :key="i" class="menu-item">
                            <a href="">{{subitem.name}}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            menu: [{
                    name: 'Главная',
                    link: ''
                },
                {
                    name: 'Услуги',
                    link: '',
                    submenu: [{
                            name: 'Видеонаблюдение',
                            link: ''
                        },
                        {
                            name: 'Контроль доступа',
                            link: ''
                        },
                        {
                            name: 'Пожарная сигнализация',
                            link: ''
                        },
                        {
                            name: 'Охранная сигнализация',
                            link: ''
                        },
                        {
                            name: 'Домофон',
                            link: ''
                        },
                    ]
                },
                {
                    name: 'О нас',
                    link: ''
                },
                {
                    name: 'Контакты',
                    link: ''
                },
            ]
        }
    },
}
</script>

<style>
.logo{
    display: flex;
    align-items: center;
    padding: 30px 0;
}
.logo-img{
    height: 60px;
    width: 100px;
    background: url('/img/logo.png') no-repeat center center / contain;
}
.logo-text h2{
    color: white;
    font-size: 35px;
    line-height: 35px;
}
.logo-text span{
    font-size: 14px;
}
.top-line {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 800;
    background: #00000027;

}

.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
}
.main-menu{
    display: flex;
}
.menu-item a{
    color: white;
    font-weight: 800;
    font-size: 16px;
    text-decoration: none;
    transition: all .2s;
    text-transform: uppercase;
}

.menu-item{
    list-style: none;
    position: relative;
    padding: 20px;
    
}
.sub-menu{
    background: white;
    border-radius: 25px;
    display: none;
    position: absolute;
    top: 50px;
    left: -50px;
    flex-direction: column;
    padding: 10px 25px;
    transition: all .3s;
    
}
.menu-item a:hover{
    color: #e2c445
}
.menu-item:hover .sub-menu, .sub-menu:hover{
    display: flex;
}
.sub-menu a{
    color: #333333
}
.sub-menu .menu-item{
    margin: 10px 0;
    padding: 0;
}
.menu-item:last-child{
    padding-right: 0;
}
</style>
