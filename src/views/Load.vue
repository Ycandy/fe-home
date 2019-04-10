<template lang="pug">
  div
</template>

<script>
import { Loading } from 'element-ui'
import querystring from 'querystring'
import Rest from 'src/model/driver/rest'
const config = require('../../config')

export default {
  components: {
  },
  data () {
    return {
      loading: undefined,
      query: this.$route.query
    }
  },
  mounted () {
    this.loading = Loading.service()
    // 如果参数中包含token信息，则将token保存在localStorage
    let token = this.parseToken()
    if (!token) {
      token = this.getToken()
    }
    if (!token) {
      this.redirectToLogin()
      return
    }
    this.$store.commit({
      type: 'setToken',
      token: token.token,
      refreshToken: token.refreshToken,
      expireOperationTime: token.expireOperationTime
    })
    this.initRest()
    this.$router.push(this.query.to ? this.query.to : { name: 'index' })
  },
  methods: {
    parseToken () {
      if (this.query && this.query.token && this.query.refresh_token && this.query.expire_operation_time) {
        let token = this.query.token
        let refreshToken = this.query.refresh_token
        let expireOperationTime = this.query.expire_operation_time
        window.localStorage.setItem('token', token)
        window.localStorage.setItem('refreshToken', refreshToken)
        window.localStorage.setItem('expireOperationTime', expireOperationTime)
        return {
          token,
          refreshToken,
          expireOperationTime
        }
      }
      return null
    },
    getToken () {
      let token = window.localStorage.getItem('token')
      let refreshToken = window.localStorage.getItem('refreshToken')
      let expireOperationTime = window.localStorage.getItem('expireOperationTime')
      if (token && refreshToken && expireOperationTime) {
        return {
          token,
          refreshToken,
          expireOperationTime
        }
      }
      return null
    },
    redirectToLogin () {
      let params = querystring.stringify({ redirect_back: window.location.href, source: 'gateway' })
      window.location.href = `${config.server.baseUrl}${config.server.login}?${params}`
    },
    initRest () {
      if (Rest.init) {
        let token = this.$store.state.token
        let commit = this.$store.commit
        Rest.init({
          token,
          setToken: params => {
            let { token, refreshToken, expireOperationTime } = params
            commit({
              type: 'setToken',
              token,
              refreshToken,
              expireOperationTime
            })
          }
        })
      }
    }
  },
  destroyed () {
    this.loading.close()
  }
}
</script>

<style lang="stylus" scoped>
</style>
