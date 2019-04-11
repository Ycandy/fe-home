<template lang="pug">
.top
  img.image(src="../../../public/img/logo.png")
  .entrance(:style="{'color': style.color, 'background-color': style.backgroundColor}") 管理方入口
</template>

<script>

export default {
  props: ['viewStyle'],
  data () {
    return {
      style: this.viewStyle
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
  },
  watch: {
    'viewStyle' (to, from) {
      this.style = to
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>

