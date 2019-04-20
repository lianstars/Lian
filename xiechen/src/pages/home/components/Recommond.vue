<template>
    <div class="waterfall">
        <ul>
            <li class="item" v-for="item of list" :key="item.id">
                <img class="item-img" :src="item.img" >
                <div class="title">{{item.title}}</div>
                <div class="des">{{item.descript}}</div>
                <div class="ass">
                	<p>{{item.assess}}</p>
                	<span>{{item.tag}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default{
  name: 'HomeRecommond',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
</style>
