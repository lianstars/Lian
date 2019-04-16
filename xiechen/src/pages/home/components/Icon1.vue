<template>
  <div class="Icon1">
    <div class="item">
      <img class="img" src="../../../assets/img/travel.jpg">
      <p>攻略-景点</p>
    </div>
    <div class="item">
      <img class="img" src="../../../assets/img/ticket.jpg">
      <p>门票-玩乐</p>
    </div>
    <div class="item">
      <img class="img" src="../../../assets/img/food.jpg">
      <p>美食林</p>
    </div>
    <div class="item">
      <img class="img" src="../../../assets/img/sight.jpg">
      <p>周边游</p>
    </div>
    <div class="item">
      <img class="img"  src="../../../assets/img/flower.jpg">
      <p>赏花踏青</p>
    </div>
  </div>
</template>

<script>
export default{
  name: 'HomeIcon1'
}
</script>

<style lang="stylus" scoped>
    .Icon1
      width: 90%
      background: #fff
      padding: 8px
      border-radius: 13px
      display: flex
      justify-content: space-around
      position: absolute
      left: 0
      right: 0
      margin: 0 auto
      margin-top: -24px
      z-index: 5
      .item
        float: left
        text-align: center
      .item img
        width: 33px
        margin-bottom: 5px
      .item p
        display: inline-block
        font-size: 12px
</style>
