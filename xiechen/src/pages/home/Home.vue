<template>
<div class="Home">
<home-header></home-header>
<home-swiper></home-swiper>
<home-icon1></home-icon1>
<home-icon2></home-icon2>
<home-icon3></home-icon3>
<home-special></home-special>
<home-activity></home-activity>
<home-tab></home-tab>
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
import HomeBottom from '../common/Bottom'
import HomeTab from './components/Tab'
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
    HomeTab,
    HomeBottom
  },
  data () {
    return {
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
      padding-bottom: 50px
</style>
