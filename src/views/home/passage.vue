<template lang="pug">
  .container
    .banner
      img()
      span 通知公告
    .list-board
      .list-item(v-for='item in data')
        .title
          .article {{ item.title }}
          .download
          .time {{ item.time }}
        .detail {{ item.detail }}
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
</style>
