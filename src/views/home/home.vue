<template lang="pug">
  .container
    Top(:viewStyle='viewStyle')
    .banner
      .notice-container
        .notice
          .same-style.same-border
            .title
              img(src="../../../public/img/通知公告.png")
              span 通知公告
            span.info-more.more 更多
          .info
            .same-style.content(v-for="item in info")
              span {{ item.name }}
              span {{ item.date }}
          .same-style.same-border
            .title
              img(src="../../../public/img/文件下载.png")
              span 文件下载
            span.download-more.more 更多
          .download
            .same-style.content(v-for="item in downloads")
              span {{ item.name }}
              span {{ item.date }}
    .thumbnail
      .caption
        .normal
          img(src="../../../public/img/云商城.png")
        .active
          img(src="../../../public/img/云商城s.png")
        span 云商城
      .caption
        .normal
          img(src="../../../public/img/安全考试.png")
        .active
          img(src="../../../public/img/安全考试s.png")
        span 安全考试
      .caption
        .normal
          img(src="../../../public/img/气体检测.png")
        .active
          img(src="../../../public/img/气体检测s.png")
        span 气体检测
      .caption
        .normal
          img(src="../../../public/img/管理方.png")
        .active
          img(src="../../../public/img/管理方s.png")
        span 管理方
      .caption
        .normal
          img(src="../../../public/img/安全巡查.png")
        .active
          img(src="../../../public/img/安全巡查s.png")
        span 安全巡查
</template>

<script>
import Top from './Top.vue'

export default {
  components: {
    Top
  },
  data () {
    return {
      viewStyle: {
        backgroundColor: '#e27471',
        color: '#ffffff'
      }
    }
  },
  computed: {
    info () {
      let data = [
        { name: '北京师范大学管理部门举办安全教育活动1', date: '01/1' },
        { name: '北京师范大学管理部门举办安全教育活动2', date: '01/2' },
        { name: '北京师范大学管理部门举办安全教育活动3', date: '01/3' },
        // { name: '北京师范大学管理部门举办安全教育活动3', date: '01/4' },
        { name: '北京师范大学管理部门举办安全教育活动3', date: '01/5' }
      ]
      return data
    },
    downloads () {
      let downloads = [
        { name: '北京师范大学管理部门举办安全教育活动1', date: '02/1' },
        { name: '北京师范大学管理部门举办安全教育活动2', date: '02/2' },
        { name: '北京师范大学管理部门举办安全教育活动3', date: '02/3' },
        // { name: '北京师范大学管理部门举办安全教育活动3', date: '02/4' },
        { name: '北京师范大学管理部门举办安全教育活动3', date: '02/5' }
      ]
      return downloads
    }
  },
  methods: {
  },
  watch: {
  }
}
</script>

<style lang="stylus" scoped>
.container
  width: 100%;
  min-width: 1200px;
  height: 100%;
  display flex
  flex-flow column nowrap
  align-items center
.banner
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 500px;
  background: url('../../../public/img/banner.png') no-repeat
.notice-container
  width: 1200px;
  height: 100%;
  min-width: 1100px;
  display: flex;
  flex-direction: row-reverse;
.notice
  padding: 14px 26px;
  width: 400px;
  height: 100%;
  background: #000000;
  opacity: 0.6;
  box-sizing: border-box;
.same-style
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
.title
  height: 54px;
  display: flex;
  flex-direction: row;
  align-items: center;
.same-border
  border-bottom:  1px solid rgba(105, 105, 105, 0.1)
.title span
  margin-left: 16px;
  color: #ffffff;
  font-size: 16px;
.more
  color: #ffffff;
  opacity: 0.5;
  font-size: 12px;
  cursor: pointer;
.content
  font-size: 12px;
  color: #ffffff;
  opacity: 0.7;
  height: 12px;
  line-height: 12px;
  box-sizing: border-box;
  margin-bottom: 25px;
  cursor: pointer;
.content:hover
  color: #e27471;
  opacity: 1;
.content:first-child
  margin-top: 28px;
.content:last-child
  margin-bottom: 24px;
.thumbnail
  width: 1200px;
  min-width: 1100px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin: 26px 0 90px 0;
.caption
  width: 224px;
  height: 170px;
  min-width: 30px;
  border: 1px solid #f0b9b8;
  margin-bottom: 20px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #e27471;
  cursor: pointer;
  background: #fefbfb;
.caption img
  width: 75px;
  height: 49px;
  margin-bottom: 30px
.active
  display: none
.caption:hover
  background: #e27471;
  color: #ffffff;
.caption:hover .active
  display: block;
.caption:hover .normal
  display: none
</style>

