<template>
<div class="wrapper">
  <swiper :options="swiperOption" ref="mySwiper">
  <!-- slides -->
    <swiper-slide>
      <img class="swiper-img" src="https://dimg04.c-ctrip.com/images/700m13000000u845b77A1_810_235_85.jpg">
    </swiper-slide>
    <swiper-slide>
      <img class="swiper-img" src="https://dimg04.c-ctrip.com/images/700r13000000tzej1D48F_810_235_85.jpg">
    </swiper-slide>
    <swiper-slide>
      <img class="swiper-img" src="https://dimg04.c-ctrip.com/images/700r13000000tft0wDBC1_810_235_85.jpg">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
</swiper>
</div>
</template>

<script>
export default{
  name: 'HomeSwiper',
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination
      text-align: right
      margin-bottom: 10px
    .wrapper >>> .swiper-pagination-bullet-active
      background: #fff
      width: 15px
      border-radius: 5px
    .wrapper
      touch-action: none
      width: 100%
      height: 0
      overflow: hidden
      padding-bottom: 31.25%
    .swiper-img
      width: 100%
</style>
