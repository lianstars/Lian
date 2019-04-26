<template>
    <div class="waterfall" ref="wrapper">
        <div>
            <ul class="waterfall-left" ref="left">
                <li class="item" ref="col" v-for="(item,id) of left" :key="id">
                    <div class="item-box">
                        <img class="item-img" :src="item.img" >
                        <div class="item-text">
                            <div class="title">{{item.title}}</div>
                            <div class="des">
                                <span class="des-left">{{item.descript}}</span>
                                <span class="des-right">{{item.tag}}</span>
                            </div>
                            <div class="ass-box">
                                <p class="ass">{{item.assess}}</p>
                                <P class="price">￥<span>{{item.price}}</span>起</P>
                                <p class="remark">{{item.remark}}</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <ul class="waterfall-right" ref="right">
                <li class="item" ref="col" v-for="(item,id) of right" :key="id">
                    <div class="item-box">
                        <img class="item-img" :src="item.img" >
                        <div class="item-text">
                            <div class="title">{{item.title}}</div>
                            <div class="des">
                                <span class="des-left">{{item.descript}}</span>
                                <span class="des-right" v-if="flag">{{item.tag}}</span>
                            </div>
                            <div class="ass-box">
                                <p class="ass">{{item.assess}}</p>
                                <P class="price">￥<span>{{item.price}}</span>起</P>
                                <p class="remark">{{item.remark}}</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default{
  name: 'HomeRecommond',
  props: ['list'],
  data () {
    return {
      left: [],
      right: [],
      flag: true
    }
  },
  methods: {
    updateWaterfall () {
      console.log('123')
      const leftHeight = this.$refs.left.clientHeight
      const rightHeight = this.$refs.right.clientHeight
      let item = this.list.shift()
      if (item == null) {
        return
      }
      this.flag = true
      if (item.tag === 1) {
        this.flag = false
        console.log(item.tag)
        console.log(this.flag)
      }
      if (leftHeight <= rightHeight) {
        this.left.push(item)
      } else {
        this.right.push(item)
        console.log(this.right)
      }
      this.$nextTick(function () {
        this.updateWaterfall()
        this.scroll = new Bscroll(this.$refs.wrapper)
      })
    }
  },
  mounted () {
    this.updateWaterfall()
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  created() {
    requestData().then((res) => {
        this.data = res.data
        this.$nextTick(() => {
        this.scroll = new Bscroll(this.$refs.wrapper, {})
        })
    })
  }
}
</script>

<style lang="stylus" scoped>
    .waterfall
      width: 94%
      height: 500px
      margin: 10px auto
      position: relative
      overflow: hidden
      .waterfall-left
        width: 46%
        display: inline-block
        float: left
      .waterfall-right
        width: 46%
        display: inline-block
        float: left
        margin-left: 10px
      .item
        display: inline-block
        width: 100%
        padding: 15px 0 0 15px
        .item-img
          border-top-left-radius: 10px
          border-top-right-radius: 10px
          width: 100%
        .item-text
          background: #fff
          border-bottom-left-radius: 10px
          border-bottom-right-radius: 10px
          .title
            font-size: 18px
            margin: 8px
          .des-left
            display: inline
            color: #fff
            background: #FF6600
            border-radius: 5px
            font-size: 12px
            padding: 3px
            margin-left: 10px
          .des-right
            color: #0080FF
            background: #97CBFF
            border-radius: 5px
            font-size: 12px
            padding: 3px
          .ass-box
            margin: 10px 0 0 10px
            padding-bottom: 8px
            .ass
              color:#808080
              padding: 8px 0 10px 0
            .price
              display: inline
              color: #ff7f50
              font-size: 12px
            .price span
              font-size: 18px
            .remark
              display: inline
              padding-left: 8px
              color:#808080
              font-size: 12px
</style>
