<template lang="pug">
  .container.load
    Top(:title='btnTitle')
    .banner(style='height: 130px')
      img.background(src='/public/img/banner2.png')
      span 文件下载
    .list-board
      .list-item(v-for='item in data')
        .title
          .article {{ item.title }}
          .download
          .time {{ item.time }}
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
import Top from 'src/components/Top.vue'

const prepare = async ({ store, params }) => {
  store.dispatch({
    type: 'fetchList',
    target: 'files',
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
    [Pagination.name]: Pagination,
    Top
  },
  data () {
    return {
      btnTitle: '管理方入口',
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
