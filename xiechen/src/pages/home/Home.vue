<template>
<div class="Home">
<home-header></home-header>
<home-swiper></home-swiper>
<home-icon1></home-icon1>
<home-icon2></home-icon2>
</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcon1 from './components/Icon1'
import HomeIcon2 from './components/Icon2'
export default{
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon1,
    HomeIcon2
  }
}
</script>

<style lang="stylus" scoped>
    .Home
      background-color: #F5F5F5
      height: 500px
</style>
