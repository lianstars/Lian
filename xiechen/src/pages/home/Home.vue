<template>
<div class="Home">
<home-header></home-header>
<home-swiper></home-swiper>
<home-icon1></home-icon1>
<home-icon2></home-icon2>
<home-icon3></home-icon3>
<home-special></home-special>
</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcon1 from './components/Icon1'
import HomeIcon2 from './components/Icon2'
import HomeIcon3 from './components/Icon3'
import HomeSpecial from './components/Special'
export default{
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon1,
    HomeIcon2,
    HomeIcon3,
    HomeSpecial
  }
}
</script>

<style lang="stylus" scoped>
    .Home
      background-color: #F5F5F5
      height:1000px
</style>
