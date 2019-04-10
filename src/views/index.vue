<template lang="pug">
.index
  .content(:style='contentStyle')
    router-view(:viewStyle='viewStyle')
</template>

<script>
import config from '~/config'

export default {
  data () {
    return {
      config,
      model: 'home',
      contentStyle: {},
      viewStyle: {}
    }
  },
  methods: {
    styleChange ({ height }) {
    }
  },
  watch: {
    '$route': {
      handler: function (to, from) {
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.index
  position relative
  width 100%
  height 100%
  .content
    position absolute
    left 48px
    width calc(100% - 48px)
    min-width 650px
    background #eff5f8
</style>
