<template>
<div id="app">

    <router-view :key="$route.path"></router-view>
</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
    font-family: 'Fira Sans', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
</style>

<script>
import Service from './views/Service.vue'
import axios from 'axios'
export default {
    methods: {
        getData() {
            let mainPageProps = []
            let servicesMenu = []
            axios.get('https://test.top-it72.ru/wp-json/wp/v2/posts/?categories=2').then(
                res => {
                    res.data.forEach(item => {
                        mainPageProps.push({
                            name: item.acf.name,
                            smallDescription: item.acf.smallDescription,
                            mainImage: item.acf.mainImage,
                            link: '/' + item.slug
                        })
                        servicesMenu.push({ name: item.acf.name, link: '/' + item.slug })
                        this.$router.addRoute({
                            name: item.slug,
                            path: '/' + item.slug,
                            component: Service,
                            props: {
                                name: item.acf.name,
                                smallDescription: item.acf.smallDescription,
                                description: item.acf.description,
                                mainImage: item.acf.mainImage,
                                images: item.acf.images,
                                brands: item.acf.brands,
                                tasks: item.acf.tasks,
                                sostav: item.acf.sostav,
                                info: mainPageProps
                            }
                        })

                    })
                    let menu = [{
                            name: 'Главная',
                            link: '/'
                        },
                        {
                            name: 'Услуги',
                            link: '',
                            submenu: servicesMenu
                        },
                        {
                            name: 'О нас',
                            link: '/about'
                        },
                        {
                            name: 'Контакты',
                            link: '/contacts'
                        },
                    ]
                    localStorage.setItem('menu', JSON.stringify(menu))
                    localStorage.setItem('main', JSON.stringify(mainPageProps))
                    this.$eventBus.$emit('changeMenu', menu)
                    this.$eventBus.$emit('changeMain', mainPageProps)
                })
        }
    },
    created() {
        this.getData()
    },
}
</script>
