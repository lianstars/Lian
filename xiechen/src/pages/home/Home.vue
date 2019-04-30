<template>
<div class="Home">
<home-header></home-header>
<home-swiper></home-swiper>
<home-icon1></home-icon1>
<home-icon2></home-icon2>
<home-icon3></home-icon3>
<home-special></home-special>
<home-activity></home-activity>
<home-bottom></home-bottom>
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
import HomeBottom from './components/Bottom'
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
    HomeRecommond,
    HomeBottom
  },
  data () {
    return {
      flag: false,
      waterfallData: [],
      season: []
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
        this.flag = true
        const data = res.data
        this.waterfallData = data.waterfallData
        this.season = data.season
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
      padding-bottom: 50px
</style>
