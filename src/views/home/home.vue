<template lang="pug">
  .container
    Top(:viewStyle='viewStyle')
    .banner(style='height: 500px')
      img.background(src="../../../public/img/banner.png")
      .notice-container
        .notice
          .same-style.same-border
            .title
              img(src="../../../public/img/通知公告.png")
              span 通知公告
            span.info-more.more(@click="goInfo") 更多
          .info
            .same-style.content(v-for="item in info")
              span {{ item.name }}
              span {{ item.date }}
          .same-style.same-border
            .title
              img(src="../../../public/img/文件下载.png")
              span 文件下载
            span.download-more.more(@click="goDownload") 更多
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
import Top from 'src/components/Top.vue'

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
  mounted () {
  },
  computed: {
    info () {
      let data = [
        { name: '北京师范大学管理部门举办安全教育活动1', date: '01/1' },
        { name: '北京师范大学管理部门举办安全教育活动2', date: '01/2' },
        { name: '北京师范大学管理部门举办安全教育活动3', date: '01/3' },
        { name: '北京师范大学管理部门举办安全教育活动3', date: '01/4' },
        { name: '北京师范大学管理部门举办安全教育活动3', date: '01/5' }
      ]
      return data.slice(0, 4)
    },
    downloads () {
      let downloads = [
        { name: '北京师范大学管理部门举办安全教育活动1', date: '02/1' },
        { name: '北京师范大学管理部门举办安全教育活动2', date: '02/2' },
        { name: '北京师范大学管理部门举办安全教育活动3', date: '02/3' },
        { name: '北京师范大学管理部门举办安全教育活动3', date: '02/4' },
        { name: '北京师范大学管理部门举办安全教育活动3', date: '02/5' }
      ]
      return downloads.slice(0, 4)
    }
  },
  methods: {
    goInfo () {
      this.$router.push({ name: 'passage' })
    },
    goDownload () {
      this.$router.push({ name: 'load' })
    }
  },
  watch: {
  }
}
</script>

<style lang="stylus" scoped>
</style>

