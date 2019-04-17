<template>
<div class="table">
    <div class="line">
        <div class="item1" style="background: #FF7F50; border-top-left-radius:8px">酒店</div>
        <div class="item2" style="background: #FF7F50">名宿·客栈</div>
        <div class="item3" style="background: #FFCC33; border-top-right-radius:8px">
        机票·火车票+酒店
        </div>
    </div>
    <div class="line">
        <div class="item1" style="background: #0099FF">机票</div>
        <div class="item2" style="background: #0099FF">火车票</div>
        <div class="item4" style="background: #0099FF;">汽车·船票</div>
        <div class="item5" style="background: #0099FF;">打车·租车</div>
    </div>
   <div class="line">
        <div class="item1" style="background: #33CC33; border-bottom-left-radius:8px">旅游</div>
        <div class="item2" style="background: #33CC33">高铁游</div>
        <div class="item4" style="background: #33CC33;">邮轮游</div>
        <div class="item5" style="background: #33CC33; border-bottom-right-radius:8px">定制游</div>
    </div>
</div>
</template>

<script>
export default{
  name: 'HomeIcon2'
}
</script>

<style lang="stylus" scoped>
    .table
      width: 94%
      margin: 0 auto
      margin-top: 54px
      border-radius: 15px
      border-bottom-right-radius:6px
      .line
        display: flex
      .line div
        height: 50px
        line-height: 50px
        color:  #fff
        text-align: center
      .item1
        width: 30%
        margin-bottom: 1px
        margin-right: 1px
        text-align: left
      .item2
        width: 20%
        margin-right: 1px
      .item3
        width: 49%
      .item4
        width: 24.4%
        margin-right: 1px
      .item5
        width: 24.4%
</style>
