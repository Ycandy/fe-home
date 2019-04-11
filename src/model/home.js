import Rest from './driver/rest'
const resource = 'home'

export default class Origin {
  constructor () {
    this.rest = new Rest({})
  }
  get (params) {
    return this.rest.get({
      resource,
      params
    }).then(r => r)
  }
}
