import Rest from './driver/rest'
const resource = 'home'

export default class Area {
  constructor () {
    this.rest = new Rest({})
  }
  fetch (params) {
    return this.rest
      .get({
        resource: `rest/${resource}/info`,
        params
      })
      .then(r => r)
  }
}
