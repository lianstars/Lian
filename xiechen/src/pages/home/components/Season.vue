<template>
    <div  class="season">
        <p class="title">当季热门</p>
        <div class="season-wrapper" ref="wrapper">
            <ul id="content" ref="iconList">
              <li>
                <p class="iconfont" style="color:#FF7F50">&#xe649;</p>
                <span style="">精选</span>
              </li>
              <li>
                <p class="iconfont" style="color:#FF7F50">&#xe601;</p>
                <span>赏花踏青</span>
              </li>
              <li>
                <p class="iconfont" style="color:#FF7F50">&#xe641;</p>
                <span>人气海岛</span>
              </li>
              <li>
                <p class="iconfont" style="color:#FF7F50">&#xe70a;</p>
                <span>亲子</span>
              </li>
              <li>
                <p class="iconfont" style="color:#FF7F50">&#xe619;</p>
                <span>情侣</span>
              </li>
              <li>
                <p class="iconfont" style="color:#FF7F50">&#xe602;</p>
                <span>自然景观</span>
              </li>
              <li>
                <p class="iconfont" style="color:#FF7F50">&#xe739;</p>
                <span>主题乐园</span>
              </li>
              <li>
                <p class="iconfont" style="color:#FF7F50">&#xe616;</p>
                <span>人文历史</span>
              </li>
            </ul>
        </div>
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
    .season
      width: 100%
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
</style>
