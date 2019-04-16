<template>
<div class="header">
    <div class="header-left">
      广州
      <span class="iconfont down-icon">&#xe62d;</span>
    </div>
    <div class="header-input">
      <span class="iconfont search">&#xe632;</span>
      优惠宝典
      <span class="iconfont speak">&#xe61e;</span>
    </div>
    <div class="header-right">
      <span class="iconfont message">&#xe659;</span>
    </div>
</div>
</template>

<script>
export default{
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
    .header
      display: flex
      width: 100%
      height: .84rem
      line-height: .84rem
      position: absolute
      z-index: 2
      background-color:rgba(0,0,0,0)
      .header-left
        width: 15%
        float: left
        padding-left: .2rem
        .down-icon
          font-size: .3rem
          padding-top: .2rem
      .header-input
        flex: 1
        width: 58%
        height: .64rem
        line-height: .64rem
        margin-top: .12rem
        margin-left: .24rem
        padding-left: .2rem
        background: #fff
        border-radius: .1rem
        background: #fff
        border-radius: .3rem
        color: #ccc
        .search
          font-size: .4rem
        .speak
          font-size: .5rem
          float: right
          padding-right: .1rem
      .header-right
        width: 10%
        padding: 0 .1rem
        float: right
        text-align: center
        .message
          font-size: .4rem
</style>
