import Axios from 'axios'
import querystring from 'querystring'
import config from '~/config'
class Rest {
  constructor ({ baseURL = config.server.baseUrl, refreshTokenUrl = `${config.server.baseUrl}${config.server.refreshToken}`, headers = {} }) {
    this.axios = Axios.create({
      baseURL,
      timeout: 20000,
      // session支持
      withCredentials: true,
      headers
    })
    this.refreshTokenUrl = refreshTokenUrl
    this.axios.interceptors.request.use(config => {
      if (Rest.validateToken()) {
        // 在发送请求之前添加头信息
        return Rest.addHeaders(config)
      } else {
        let promise = Rest.addRequestQueue(config)
        if (!Rest.isRefreshing) Rest.refreshToken(this.refreshTokenUrl)
        return promise
      }
    })
    this.axios.interceptors.response.use(r => {
      return r
    }, err => {
      if (Rest.redirect) {
        return
      }
      // 对401响应错误做登录跳转
      if (err.response) {
        switch (err.response.status) {
          case 401:
            Rest.redirect = true
            let params = querystring.stringify({ redirect_back: `${window.location.href}`, source: 'gateway' })
            window.location.href = `${config.server.baseUrl}${config.server.login}?${params}`
            break
          default:
            return Promise.reject(err)
        }
      } else {
        return Promise.reject(err)
      }
    })
    return this
  }
  fetch ({ resource = '', params = {} }) {
    return this.axios.get(resource, { params }).then(r => Promise.resolve(r.data))
  }
  get ({ resource = '', params = {} }) {
    return this.axios.get(resource, { params }).then(r => r.data)
  }
  post ({ resource = '', params = {} }) {
    return this.axios.post(resource, params).then(r => Promise.resolve(r.data))
  }
  patch ({ resource = '', params = {} }) {
    return this.axios.patch(resource, params).then(r => Promise.resolve(r.data))
  }
  put ({ resource = '', params = {} }) {
    return this.axios.put(resource, params).then(r => Promise.resolve(r.data))
  }
  delete ({ resource = '', params = {} }) {
    return this.axios.delete(resource, params).then(r => Promise.resolve(r.data))
  }
}

Rest.addHeaders = (config) => {
  config.headers['X-Gini-Token'] = Rest.token.token
  return config
}
Rest.addRequestQueue = (config) => {
  return new Promise((resolve, reject) => {
    Rest.requestQueue.push(() => {
      config.headers['X-Gini-Token'] = Rest.token.token
      resolve(config)
    })
  })
}
Rest.validateToken = () => {
  let token = Rest.token
  if (!token.token) {
    return false
  }
  let expireOperationTime = token.expireOperationTime
  let now = new Date().getTime() / 1000
  if (now > expireOperationTime || expireOperationTime - now < 120) {
    return false
  }
  return true
}
Rest.refreshToken = (refreshTokenUrl) => {
  if (Rest.isRefreshing) {
    return
  }
  Rest.isRefreshing = true
  Axios({
    method: 'GET',
    url: refreshTokenUrl,
    params: { 'refresh_token': Rest.token.refreshToken, source: 'gateway' },
    withCredentials: true,
    timeout: 5000
  }).then(res => {
    let data = res.data
    Rest.setToken(data)
    Rest.isRefreshing = false
    return data.token
  }, () => {
    Rest.redirect = true
    let params = querystring.stringify({ redirect_back: `${window.location.href}`, source: 'gateway' })
    window.location.href = `${config.server.baseUrl}${config.server.login}?${params}`
  }).then(token => {
    while (Rest.requestQueue.length > 0) {
      let task = Rest.requestQueue.shift()
      task(token)
    }
  })
}
Rest.init = ({ token, setToken }) => {
  Rest.token = token
  Rest.setToken = setToken
  Rest.refreshing = false
  Rest.requestQueue = []
  delete Rest.init
}

export default Rest
