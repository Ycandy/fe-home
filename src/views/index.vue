<template lang="pug">
.index
  router-view
</template>

<script>
import config from '~/config'

export default {
  data () {
    return {
      config
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
  display flex
  flex-flow column nowrap
  background #ffffff
</style>
