<template>
  <div class="season">
    <div class="tab">
        <p class="title">当季热门</p>
        <div class="season-wrapper" ref="wrapper">
            <ul id="content" ref="iconList">
              <li>
                <router-link to="/good">
                <p class="iconfont" style="color:#FF7F50">&#xe649;</p>
                <span class="name">精选</span>
                </router-link>
              </li>
              <li>
                <router-link to="/flower">
                <p class="iconfont" style="color:#FF7F50">&#xe601;</p>
                <span class="name">赏花踏青</span>
                </router-link>
              </li>
              <li>
                <router-link to="/sea">
                <p class="iconfont" style="color:#FF7F50">&#xe641;</p>
                <span class="name">人气海岛</span>
                </router-link>
              </li>
              <li>
                <router-link to="/family">
                <p class="iconfont" style="color:#FF7F50">&#xe70a;</p>
                <span class="name">亲子</span>
                </router-link>
              </li>
              <li>
                <router-link to="/love">
                <p class="iconfont" style="color:#FF7F50">&#xe619;</p>
                <span class="name">情侣</span>
                </router-link>
              </li>
              <li>
                <router-link to="/natural">
                <p class="iconfont" style="color:#FF7F50">&#xe602;</p>
                <span class="name">自然景观</span>
                </router-link>
              </li>
              <li>
                <router-link to="/play">
                <p class="iconfont" style="color:#FF7F50">&#xe739;</p>
                <span class="name">主题乐园</span>
                </router-link>
              </li>
              <li>
                <router-link to="/history">
                <p class="iconfont" style="color:#FF7F50">&#xe616;</p>
                <span class="name">人文历史</span>
                </router-link>
              </li>
            </ul>
        </div>
    </div>
    <router-view class="content"></router-view>
    <div class="clear"></div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default{
  name: 'HomeSeason',
  methods: {
    initScroll () {
      let temp = document.getElementById('content')
      let lis = temp.getElementsByTagName('li')
      let iconWidth = 84
      let margin = 24
      let width = (iconWidth + margin) * lis.length - margin * 2
      this.$refs.iconList.style.width = width + 'px'
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new Bscroll(this.$refs.wrapper, {
            scrollX: true,
            scrollY: false
          })
        } else {
          this.scroll.refresh()
        }
      })
    }
  },
  mounted () {
    this.initScroll()
  }
}
</script>

<style lang="stylus" scoped>
    .tab
      width: 100%
      padding-bottom: 65px
      background: #fff
      .title
        font-size: 20px
        padding: 12px
      .season-wrapper
        width: 100%
        white-space: nowrap
        overflow: hidden
        position: absolute
        background: #fff
        #content
          padding-bottom: 10px
        #content li
          display: inline-block
          padding: 0 24px 0 24px
          .iconfont
            font-size: 36px
            padding-bottom: 5px
            text-align: center
          .name
            color: #000
    .clear
      height: 430px
</style>
