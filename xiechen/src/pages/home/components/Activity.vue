<template>
  <div class="activity">
    <div class="title">
      <p>热门活动</p>
      <span>更多 ></span>
    </div>
    <table class="contain">
      <tr>
        <td class="item">
          <div class="item-left">
            <p class="item-tit">IMAX活动</p>
            <p class="item-txt">复仇者联盟4</p>
            <div class="dis">免费活动进行中</div>
          </div>
          <img src="../../../assets/img/IMAX.jpg">
        </td>
        <td class="item">
          <div class="item-left">
            <p class="item-tit">会员福利</p>
            <p class="item-txt">签到领积分</p>
            <div class="dis">立即领取</div>
          </div>
          <img src="../../../assets/img/礼物.png">
        </td>
      </tr>
      <tr>
        <td class="item">
          <div class="item-left">
            <p class="item-tit">优品商城</p>
            <p class="item-txt">小长假收纳必备</p>
            <div class="dis">点击收购</div>
          </div>
          <img src="../../../assets/img/商城 (1).png">
        </td>
        <td class="item">
          <div class="item-left">
            <p class="item-tit">球迷超级福利</p>
            <p class="item-txt">付费直播全免单</p>
            <div class="dis">NBA门票特价</div>
          </div>
          <img src="../../../assets/img/福利.png">
        </td>
      </tr>
    </table>
    <!--
    <div class="contain">
      <div class="item">
        <div class="item-left">
          <p class="item-tit">IMAX活动</p>
          <p class="item-txt">复仇者联盟4</p>
          <div class="dis">免费活动进行中</div>
        </div>
        <img src="../../../assets/img/IMAX.png">
      </div>
      <div class="item">
        <div class="item-left">
          <p class="item-tit">IMAX活动</p>
          <p class="item-txt">复仇者联盟4</p>
          <div class="dis">免费活动进行中</div>
        </div>
        <img src="../../../assets/img/IMAX.png">
      </div>
      <div class="item">
        <div class="item-left">
          <p class="item-tit">IMAX活动</p>
          <p class="item-txt">复仇者联盟4</p>
          <div class="dis">免费活动进行中</div>
        </div>
        <img src="../../../assets/img/IMAX.png">
      </div>
      <div class="item">
        <div class="item-left">
          <p class="item-tit">IMAX活动</p>
          <p class="item-txt">复仇者联盟4</p>
          <div class="dis">免费活动进行中</div>
        </div>
        <img src="../../../assets/img/IMAX.png">
      </div>
    </div>
    -->
  </div>
</template>

<script>
export default{
  name: 'HomeActivity'
}
</script>

<style lang="stylus" scoped>
    .activity
      width: 94%
      background: #fff
      margin: 14px auto
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
      .contain
        width: 100%
        border-collapse:collapse
      tr td:first-child
        border-left:0
      tr td:last-child
        border-right:0
      tr:last-child td
        border-bottom: 0
      .item
        position: relative
        width: 50%
        height: 60px
        padding: 10px
        border: 1px solid #C0C0C0
      .item-left
        width: 54%
        float: left
      .item-tit
        font-size: 16px
      .item-txt
        color: #808080
        margin: 4px 0px
      .dis
        display: inline-block
        background: #FF7F50
        font-size: 14px
        -webkit-transform: scale(0.70)
        color: #fff
        border-radius: 20px
        padding: 6px
        margin-bottom: 4px
        margin-left: -16px
      .item img
        position: absolute
        left: 50%
        top: 50%
        margin-left: -4px
        margin-top: -28px
        width: 25%
</style>
