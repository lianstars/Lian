<template>
<div>
<bottom></bottom>
</div>
</template>

<script>
import Bottom from '../common/Bottom'
export default{
  name: 'Photo',
  components: {
    Bottom
  },
  watch: {
    $route (to, from) {
      console.log(to.path)
    },
    deep: true
  }
}
</script>

<style lang="stylus" scoped>
</style>
