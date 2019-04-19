<template>
  <div class="special">
    <div class="title">
      <p>超值优惠</p>
      <span>更多 ></span>
    </div>
    <div class="content">
      <div class="spe-swiper">
        <p class="content-tit">门票特惠</p>
        <div class="wrapper">
          <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
            <swiper-slide>
              <div class="bac"></div>
              <img class="swiper-img" src="http://dimg04.c-ctrip.com/images/fd/tg/g2/M0B/87/F3/CghzgVWwtkiABWPkACg8DgXiBlU807_C_221_166.jpg">
              <div class="swiper-text">
                <p>花筑·大阪堺筋本町酒店</p>
                <div class="dis">省￥210</div>
                <div class="money">￥<span>628</span>起</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="bac"></div>
              <img class="swiper-img" src="http://dimg01.c-ctrip.com/images/fd/tg/g1/M05/C7/51/CghzflWwsHOAMni3AA2c-FPVxCk836_C_221_166.jpg">
              <div class="swiper-text">
                <p>张家界天空玻璃栈道</p>
                <div class="dis">省￥290</div>
                <div class="money">￥<span>306</span>起</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="bac"></div>
              <img class="swiper-img" src="http://dimg01.c-ctrip.com/images/fd/tg/g1/M07/7A/98/CghzfVWwtayAcRE2ABaIuxjYffE235_C_221_166.jpg">
              <div class="swiper-text">
                <p>桂林阳朔漓江3日2晚</p>
                <div class="dis">省￥425</div>
                <div class="money">￥<span>418</span>起</div>
              </div>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
        </div>
      </div>
      <div class="spe-plane">
        <p class="content-tit">特惠机票 ></p>
        <div class="spe-plane-item">
          <p class="iconfont">上海 &#xe6b4; 北京</p>
          <div class="dis">3.0折</div>
          <div class="money">￥<span>406</span>起</div>
        </div>
        <div class="spe-plane-item">
          <p class="iconfont">上海 &#xe6b4; 深圳</p>
          <div class="dis dis-small">2.5折</div>
          <div class="money">￥<span>420</span>起</div>
        </div>
      </div>
    </div>
    <div class="bot">
      <div class="bot-item">
        <p class="bot-item-tit">特价旅行</p>
        <p class="tip"><span class="str">限时</span>抢购</p>
      </div>
      <div class="bot-item bot-item-mid">
        <p class="bot-item-tit">特价酒店</p>
        <p class="tip">超值<span class="str">3折</span>起</p>
      </div>
      <div class="bot-item">
        <p class="bot-item-tit">私家团</p>
        <p class="tip">最高<span class="str">减1000</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'HomeSpecial',
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
      margin-bottom: 106px
      font-size: 14px
    .wrapper >>> .swiper-pagination-bullet-active
      background: #fff
      width: 15px
      border-radius: 5px
    .special
      width: 94%
      margin: 0 auto
      background: #fff
      border-radius: 10px
      .title
        padding: 12px
        height: 20px
      .title p
        float: left
        font-size: 20px
      .title span
        float: right
        color: #808080
      .content
        width: 100%
        height: 190px
        .wrapper
          margin: 10px
          height: 140px
        .spe-swiper
          width: 49%
          height: 190px
          overflow: hidden
          display: inline-block
          background: #FF7F50
          float: left
          .bac
            width: 100%
            height: 30px
            margin-top: 50px
            position: absolute
            z-index: 2
            background: linear-gradient(transparent, #fff)
          .swiper-img
            width: 100%
            height: 80px
          .swiper-text
            display: block
            height: 52px
            background: #fff
            padding: 5px
            .dis
              display: inline-block
              background: #FF7F50
              font-size: 14px
              -webkit-transform: scale(0.70)
              color: #fff
              border-radius: 20px
              padding: 6px
              margin: 12px 0 0 4px
            .money
              display: inline-block
              float: left
              margin-top: 18px
              color: #FF7F50
              font-size: 12px
            .money span
              font-size: 18px
        .content-tit
          color: #fff
          margin: 12px
          font-size: 16px
        .spe-plane
          width: 49%
          height: 190px
          float: left
          display: inline-block
          background: #40E0D0
          .spe-plane-item
            width: 90%
            background: #fff
            margin: 0 auto 10px
          .spe-plane-item p
            padding: 8px
            font-size: 14px
          .dis
            display: inline-block
            background: #FF7F50
            font-size: 14px
            -webkit-transform: scale(0.70)
            color: #fff
            border-radius: 20px
            padding: 6px
            margin-bottom: 6px
          .money
            display: inline-block
            float: right
            margin: 6px 8px
            color: #FF7F50
            font-size: 12px
          .money span
            font-size: 18px
      .bot
        display: flex
        .bot-item
          width: 33.33%
          height: 88px
          .bot-item-tit
            padding: 12px 0px 6px 12px
            font-size: 16PX
          .tip
            font-size: 14px
            color: #808080
            margin-left: 12px
          .tip span
            color: #FF0000
        .bot-item-mid
          border-left: 1px solid #C0C0C0
          border-right: 1px solid #C0C0C0
</style>
