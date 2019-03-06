// 引入mockjs
const Mock = require('mockjs')

/* eslint-disable no-undef */
const config = CONFIG

Mock.mock(config.app.info, 'get', () => {
  return {
    name: '测试',
    email: 'test@geneegroup.com',
    status: 'status_normal'
  }
})

// mock一组数据
Mock.mock(config.app.getParams, 'get', () => {
  return {
    'basic': [
      {
        'name': '学工号',
        'key': 'ref_no',
        'required': true,
        'type': 0,
        'value': 'test@geneegroup.com'
      },
      {
        'name': '密码',
        'key': 'password',
        'required': true,
        'type': 0,
        'value': ''
      },
      {
        'name': '重复摩玛',
        'key': 'repassword',
        'required': true,
        'type': 0,
        'value': ''
      },
      {
        'name': '姓名',
        'key': 'name',
        'required': true,
        'type': 0,
        'value': '测试'
      },
      {
        'name': '联系电话',
        'key': 'phone',
        'required': false,
        'type': 0,
        'value': ''
      },
      {
        'name': '邮箱',
        'key': 'email',
        'required': true,
        'type': 0,
        'value': 'test@geneegroup.com'
      }
    ],
    'extend': [
      {
        'name': 'token',
        'key': 'token',
        'required': true,
        'type': 0,
        'value': ''
      },
      {
        'name': 'card_no_s',
        'key': 'card_no_s',
        'required': false,
        'type': 2,
        'value': ''
      },
      {
        'name': 'card_no_s',
        'key': 'card_no_s',
        'required': true,
        'type': 1,
        'value': '',
        'select': [
          '1', '2', '3'
        ]
      }
    ]
  }
})