<template>
<div class="home">
    <TopLine />
    <MainSlider :slides="info" />
    <Icons />
    <about-us />
    <how-works />
    <services :services="info" />
    <phone-cons />

</div>
</template>

<script>
import TopLine from '../components/General/TopLine.vue'
import AboutUs from '../components/MainPage/AboutUs.vue'
import HowWorks from '../components/MainPage/HowWorks.vue'
import Icons from '../components/MainPage/Icons.vue'
import MainSlider from '../components/MainPage/MainSlider.vue'
import PhoneCons from '../components/MainPage/PhoneCons.vue'
import Services from '../components/MainPage/Services.vue'
// @ is an alias to /src

export default {
    created() {
      document.title="ReGuard | Системы безопасности в Тюмени"
        this.info = JSON.parse(localStorage.getItem('main'))
        this.$eventBus.$on('changeMain', data => { this.info = data })
    },
    destroyed() {
      this.$eventBus.$off('changeMain')
    },
    name: 'Home',
    components: {
        MainSlider,
        TopLine,
        Icons,
        AboutUs,
        HowWorks,
        Services,
        PhoneCons
    },
    data() {
        return {
            info: []
        }
    }
}
</script>
