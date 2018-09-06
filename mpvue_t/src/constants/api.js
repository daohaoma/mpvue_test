// 资讯
export const info = {
  // 列表
  list: {
    method: 'POST',
    url: '/listInformation'
  },
  // 资讯详情
  detail: {
    method: 'POST',
    url: '/findInformationByUuid'
  }
}

// 上传
export const upload = {
  // 上传图片到七牛
  uploadFile: 'https://devq.qiaofin.com/personnel/weixinApi/uploadFile'
}

export default {
  info,
  upload
}
