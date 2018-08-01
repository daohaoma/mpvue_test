<template>
  <div class="detail-wrap">
    <div class="detail-title">{{ detail.title }}</div>
    <img :src='detail.pictureUrl' alt="" class="detail-img">
    <div class="detail-upload" @click="uploadImg">上传图片</div>
    <div class="detail-submit" @click="onSubmit">保存</div>
  </div>
</template>

<script>

import url from '@/api/url.js'
export default {
  data () {
    return {
      detail: {},
      url: '',
      id: ''
    }
  },

  components: {},

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getCarouseDetail (option) {
      var that = this
      wx.request({
        url: url.getCarouselDetail,
        method: 'POST',
        data: {
          ...option
        },
        success: function (res) {
          // console.log(res)
          var datas = res.data.data
          // console.log(datas)
          that.detail = datas
          wx.stopPullDownRefresh()
        },
        fail: function (e) {
          // Toptips('获取数据失败，请下拉刷新重试')
          wx.stopPullDownRefresh()
        }
      })
    },
    uploadImg: function () {
      var that = this
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        success: function (res) {
          that.detail.pictureUrl = res.tempFilePaths[0]
          wx.uploadFile({
            url: url.upload,
            filePath: res.tempFilePaths[0],
            name: 'file',
            success: function (res1) {
              var data = JSON.parse(res1.data).data.link
              // console.log(JSON.parse(res1.data).data.link)
              that.url = data
            }
          })
        }
      })
    },
    onSubmit: function () {
      var params = {
        cityUuid: [],
        releasedNationwide: true,
        uuid: this.id,
        endTime: '',
        pictureUrl: this.url,
        startTime: '',
        title: this.detail.title,
        url: this.detail.url
      }
      wx.request({
        url: url.updateCarousel,
        method: 'POST',
        data: {
          carousel: params
        },
        success: function (res) {
          // console.log(res)
          // console.log(datas)
          wx.stopPullDownRefresh()
          const url = '../carouselist/main'
          wx.navigateTo({ url })
        },
        fail: function (e) {
          // Toptips('获取数据失败，请下拉刷新重试')
          wx.stopPullDownRefresh()
        }
      })
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据

  },
  onLoad: function (option) {
    // console.log(option)
    this.id = option.carouselUuid
    this.getCarouseDetail(option)
  }
}
</script>

<style scoped>
/* 注意：增加scoped属性的作用是限定当前组件样式的作用域仅作用域当前组件，这样可以避免全局影响 */
  .detail-title {
    color: #666;
    font-size: 50rpx;
    width: 100%;
    margin: 30rpx 0;
  }
  .detail-img {
    width: 100%;
    height: 210rpx;
    margin-bottom: 10rpx;
  }
  .detail-upload {
    color: #fff;
    width: 160rpx;
    height: 60rpx;
    line-height: 60rpx;
    font-size: 30rpx;
    background: #ff822e;
    text-align: center;
    border-radius: 5px;
  }
  .detail-submit {
    width: 100%;
    height: 75rpx;
    line-height: 75rpx;
    background: #ff822e;
    text-align: center;
    color: #fff;
    font-size: 45rpx;
    position:fixed;
    bottom:10rpx;
    border-radius: 5px;
  }
</style>
