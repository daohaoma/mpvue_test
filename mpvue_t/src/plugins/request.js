// 请求插件
const plugin = {}

plugin.install = function (Vue, options) {
  const request = (api, data = {}) => {
    return new Promise((resolve, reject) => {
      // 拼接请求url
      const url = options.baseUrl + api.url
      // method必须为大写
      const method = (api.method).toUpperCase()
      // 自定义请求头部
      let header = options.header
      if (typeof (header) === 'function') {
        header = header()
      }
      // 小程序请求方法
      wx.request({
        url,
        data,
        method,
        header,
        success: function (res) {
          const {
            statusCode,
            data
          } = res
          if (statusCode === 200) {
            resolve(data)
          } else {
            resolve({
              code: 0,
              msg: '请求失败'
            })
          }
        },
        fail: function () {
          reject(new Error('请求失败'))
        }
      })
    })
  }

  Vue.prototype.$request = request
}

export default plugin
