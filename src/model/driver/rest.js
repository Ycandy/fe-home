import Axios from 'axios'
import config from '~/config'
class Rest {
  constructor ({ baseURL = config.server.baseUrl, headers = {} }) {
    this.axios = Axios.create({
      baseURL,
      timeout: 20000,
      // session支持
      withCredentials: true,
      headers
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

Rest.init = ({ token }) => {
  Rest.token = token
  Rest.refreshing = false
  Rest.requestQueue = []
  delete Rest.init
}

export default Rest
