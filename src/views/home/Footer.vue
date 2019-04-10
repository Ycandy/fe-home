<template lang="pug">
.bottom
  .bottom-board
    .left
      img(src="../../../public/img/bottom_logo.png" alt="")
      .line
      .message
        div 平台名称：北京师范大学实验室安全管理平台
        div 技术支持：基理科技
        div 课题组客服电话：400-052-2624
    .right
      .message
        div 关注 LabMai 公众号
        div 提供更多便捷服务
      img(src="../../../public/img/bottom_logo.png" alt="")
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
.bottom
  width: 100%;
  height: 65px;
  background-color: #f7f8fc;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  flex: none;
.bottom-board
  min-width: 1100px;
  width: 1200px;
  min-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-between
.bottom-board .left, .bottom-board .right
  display: flex;
  align-items: center
.bottom .line
  margin: 0 26px;
  width: 1px;
  height: 26px;
  background-color: #9396a2
.bottom .message
  display: flex;
  font-size: 12px;
  color: #9396a2;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-right: 20px
</style>

