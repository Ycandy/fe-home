<template lang="pug">
.index
  router-view
  Footer
</template>

<script>
import config from '~/config'
import Footer from './home/Footer'

export default {
  components: {
    Footer
  },
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
  display flex
  flex-flow column nowrap
  background #ffffff
</style>
