<template lang="pug">
  .container
    .banner(style='height: 130px')
      img.background(src='public/img/banner2.png')
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
const prepare = async ({ store, params }) => {
  store.dispatch({
    type: 'fetchList',
    target: 'notice',
    page: 10,
    perpage: 1
  })
}

export default {
  async beforeRouteEnter (to, from, next) {
    let params = to.params
    let store = to.params.store
    await prepare({ params, store })
    next()
  },
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
