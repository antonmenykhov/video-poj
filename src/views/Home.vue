<template>
  <div class="home">
    <header>
      <TopLine />
      <MainSlider />
      <Icons />
    </header>
  
  </div>
</template>

<script>
import TopLine from '../components/General/TopLine.vue'
import Icons from '../components/MainPage/Icons.vue'
import MainSlider from '../components/MainPage/MainSlider.vue'
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    MainSlider,
    TopLine,
    Icons
   
  }
}
</script>
