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
.top
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1200px;
  min-width: 1100px;
  height: 100px;
  align-items: center;
.entrance
  font-size: 14px;
  width: 100px;
  height: 32px;
  line-height: 32px;
  border: 1px solid #e27471;
  border-radius: 4px;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
.image
  width: 500px;
  height: 58px;
</style>

