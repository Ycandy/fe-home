<template lang="pug">
  .container
    .banner
      img()
      span 文件下载
    .list-board
      .list-item(v-for='item in data')
        .title
          .article {{ item.title }}
          .download
          .time {{ item.time }}
    .page
      el-pagination(
        @size-change='handleSizeChange'
        @current-change='handleCurrentChange'
        :current-page.sync='currentPage'
        :page-size='pageSize'
        layout='prev, pager, next, total'
        :total='pageTotal')
</template>

<script>
import { Pagination } from 'element-ui'

export default {
  components: {
    [Pagination.name]: Pagination
  },
  data () {
    return {
      data: [{ title: '北师大', time: '2019-03-09', detail: '123ashdpfhapuehpauh' },
        { title: '北师大', time: '2019-03-09', detail: '123ashdpfhapuehpauh' },
        { title: '北师大', time: '2019-03-09', detail: '123ashdpfhapuehpauh' },
        { title: '北师大', time: '2019-03-09', detail: '123ashdpfhapuehpauh' },
        { title: '北师大', time: '2019-03-09', detail: '123ashdpfhapuehpauh' },
        { title: '北师大', time: '2019-03-09', detail: '123ashdpfhapuehpauh' }],
      currentPage: 1,
      pageSize: 10,
      pageTotal: 100
    }
  },
  methods: {
    handleSizeChange () {},
    handleCurrentChange () {}
  }
}
</script>

<style lang="stylus" scoped>
.container
  display flex
  flex-flow: column nowrap
  flex 1
  align-items center
.list-board
  padding-top 30px
  max-width 1060px
  width 100%
  flex 1
  display flex
  flex-flow: column nowrap
.page, .banner
  width 100%
  flex none
  display flex
  flex-flow: column nowrap
  justify-content center
  align-items center
.banner
  height 40px
  background bottom center
  background-size cover
.page
  height 50px
  margin 50px 0 60px 0
.list-item
  width 100%
  display flex
  flex-flow column nowrap
  padding-bottom 30px
  margin-top 30px
  border-bottom 1px solid #e9e9e9
  .title
    display flex
    flex-flow row nowrap
    cursor pointer
    .article 
      color #333333
      max-width 960px
      line-height 22px
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
      flex 1
    .time
      color #b0b0b0
      width 100px
      flex none
  .detail
    margin-top 16px
    line-height 18px
    max-width 960px
    color #999999
    overflow hidden
    white-space nowrap
    text-overflow ellipsis
.page >>>
  .el-pagination
    button
      margin 0 18px
    .el-pager
      li
        min-width 28px
        width 28px
        height 28px
        line-height 28px
        font-weight normal
        padding 0
      li.active
        color #ffffff
        background-color #5db8f1
        border-radius 14px
      li+li
        margin 0 18px
</style>
