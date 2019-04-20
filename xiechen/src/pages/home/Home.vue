<template>
<div class="Home">
<home-header></home-header>
<home-swiper></home-swiper>
<home-icon1></home-icon1>
<home-icon2></home-icon2>
<home-icon3></home-icon3>
<home-special></home-special>
<home-activity></home-activity>
<home-season></home-season>
<home-recommond :list="waterfallData"></home-recommond>
</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcon1 from './components/Icon1'
import HomeIcon2 from './components/Icon2'
import HomeIcon3 from './components/Icon3'
import HomeSpecial from './components/Special'
import HomeActivity from './components/Activity'
import HomeSeason from './components/Season'
import HomeRecommond from './components/Recommond'
import axios from 'axios'
export default{
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon1,
    HomeIcon2,
    HomeIcon3,
    HomeSpecial,
    HomeActivity,
    HomeSeason,
    HomeRecommond
  },
  data () {
    return {
      waterfallData: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/static/mock/recommond.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.waterfallData = data.waterfallData
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="stylus" scoped>
    .Home
      background-color: #F5F5F5
      height:1200px
</style>
