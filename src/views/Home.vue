<template>
  <div class="home">
    <header>
      <TopLine />
      <MainSlider />
      <Icons />
      <about-us />
      <how-works />
      <services />
      <phone-cons />
    </header>
  
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
  name: 'Home',
  components: {
    MainSlider,
    TopLine,
    Icons,
    AboutUs,
    HowWorks,
    Services,
    PhoneCons
   
  }
}
</script>
