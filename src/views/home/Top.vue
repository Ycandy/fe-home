<template lang="pug">
.top
  img.image(src="../../../public/img/logo.png")
  .entrance 管理方入口
</template>

<script>

export default {
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  watch: {
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
  color: #ffffff;
  width: 100px;
  height: 32px;
  line-height: 32px;
  background-color: #e27471;
  border: none;
  border-radius: 4px;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
.image
  width: 500px;
  height: 58px;
</style>

