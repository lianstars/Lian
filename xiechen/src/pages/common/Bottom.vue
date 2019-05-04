<template>
    <div id="bottom" ref="bottom">
      <ul class="contain">
        <li>
          <router-link to="/">
          <p class="iconfont">&#xe62b;</p>
          <span class="name">首页</span>
          </router-link>
        </li>
        <li>
          <router-link to="/stroke">
          <p class="iconfont">&#xe8d5;</p>
          <span class="name">行程</span>
          </router-link>
        </li>
        <li>
          <router-link to="/photo">
          <p class="iconfont">&#xe622;</p>
          <span class="name">旅拍</span>
          </router-link>
        </li>
        <li>
          <router-link to="/service">
          <p class="iconfont">&#xe608;</p>
          <span class="name">客服</span>
          </router-link>
        </li>
        <li>
          <router-link to="/user">
          <p class="iconfont">&#xe607;</p>
          <span class="name">我的</span>
          </router-link>
        </li>
      </ul>
    </div>
</template>

<script>
export default{
  name: 'Bottom',
  watch: {
    $route (to, from) {
      console.log(to, from)
    }
  }
}
</script>

<style lang="stylus" scoped>
    #bottom
      border-top: #C0C0C0 solid 1px
      height: 50px
      width: 100%
      background: #fff
      bottom: 0
      left: 0
      position: fixed
      z-index: 999
      .contain
        width: 100%
        display: flex
        white-space: nowrap
        justify-content: space-around
        overflow: hidden
        position: absolute
        padding: 8px 0px
      .contain li
        display: inline-block
        text-align: center
        .iconfont
          font-size: 22px
          margin-bottom: 4px
          color: #000
        .name
          font-size: 12px
          color: #000
</style>
