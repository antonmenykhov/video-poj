<template>
<div class="service">
    <top-line />
    <Header :name="name" :mainImage="mainImage" :smallDescription="smallDescription" />
    <vendors :vendors="brands"></vendors>
    <main-info :name="name" :images="images" :description="description" />
    <tasks :tasks="tasks" />
    <sostav :sostav="sostav" />
    <how-works />
    <phone-cons />
    
</div>
</template>

<script>
import TopLine from '../components/General/TopLine.vue'
import HowWorks from '../components/MainPage/HowWorks.vue'
import PhoneCons from '../components/MainPage/PhoneCons.vue'
import Header from '../components/Service/Header.vue'
import MainInfo from '../components/Service/MainInfo.vue'
import Sostav from '../components/Service/Sostav.vue'
import Tasks from '../components/Service/Tasks.vue'
import Vendors from '../components/Service/Vendors.vue'
export default {
    props: {
        name: String,
        smallDescription: String,
        description: String,
        mainImage: String,
        images: Array,
        brands: Array,
        tasks: Array,
        sostav: Array
    },
    components: { TopLine, Header, Vendors, MainInfo, HowWorks, PhoneCons, Tasks, Sostav },
    created() {
        document.title=this.name+' в Тюмени'
    },

}
</script>

<style>

</style>
