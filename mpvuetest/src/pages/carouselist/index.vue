<template>
  <div class="carouselist-container">
    <div class="carouse-header">
      以下是轮播图列表
    </div>
    <scroll-view class="carouse-list" scroll-y="true" :style="{'height': windowHeight}">
      <div class="carouse-list-item" v-for="(item, index) in carouselList" :key="index">
        <div><img :src="item.pictureUrl" alt=""  class="item-img"></div>
        <div class="item-con">
          <div class="item-con-status" :class="{'active' : item.status === 1}">{{ item.status === 0 ? '未上线' : '已上线' }}</div>
          <div class="item-con-title" @click="goDetail(item.uuid)">{{ item.title }}</div>
        </div>
      </div>
    </scroll-view>
  </div>
</template>

<script>

import url from '@/api/url.js'
export default {
  data () {
    return {
      carouselList: [],
      windowHeight: 0
    }
  },

  components: {},

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getCarouseList () {
      var that = this
      wx.request({
        url: url.listCarousel,
        method: 'POST',
        success: function (res) {
          // console.log(res)
          var datas = res.data.data.list
          // console.log(datas)
          if (!datas) {
            // Toptips('获取数据失败，请下拉刷新重试')
            return
          }
          if (datas.length > 0) {
            // datas.forEach((item, index) => {
            //   item.editTime = util.toDate(item.editTime)
            //   item.onlineEndTime = util.toDate(item.onlineEndTime)
            //   item.onlineStartTime = util.toDate(item.onlineStartTime)
            // })
            that.carouselList = datas
          }
          wx.stopPullDownRefresh()
        },
        fail: function (e) {
          // Toptips('获取数据失败，请下拉刷新重试')
          wx.stopPullDownRefresh()
        }
      })
    },
    goDetail (uuid) {
      var url = '/pages/carousedetail/main?carouselUuid=' + uuid
      wx.navigateTo({ url })
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
    // this.getCarouseList()
  },
  onLoad () {
    this.getCarouseList()
  },
  onReady () {
    var that = this
    wx.getSystemInfo({
      success ({ windowHeight }) {
        console.log(windowHeight)
        that.windowHeight = windowHeight - 150 + 'px'
      }
    })
  },
  // 监听用户下拉刷新动作
  onPullDownRefresh: function () {
    this.getCarouseList()
  }
}
</script>

<style scoped>
/* 注意：增加scoped属性的作用是限定当前组件样式的作用域仅作用域当前组件，这样可以避免全局影响 */
  .carouselist-container {
    padding: 0 20rpx;
  }
  .carouse-header {
    height: 30rpx;
    margin: 60rpx 0;
    color: #666;
    font-size: 30rpx;
    text-align: center;
  }
  .carouse-list {
    background: #fff;
  }
  .carouse-list-item {
    width: 100%;
    background: #e4e4e4;
    margin: 40rpx 0;
    border-radius: 5px;
  }
  .item-img {
    width: 100%;
    height: 210rpx;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
  }
  .item-con {
    display: flex;
    flex-direction: row;
  }
  .item-con-status {
    background: #666;
    font-size: 30rpx;
    width: 180rpx;
    height: 50rpx;
    line-height: 50rpx;
    text-align: center;
    color: #fff;
    margin: 10rpx 20rpx;
    border-radius: 5px;
  }
  .item-con-title {
    font-size: 35rpx;
    color: #ff822e;
    float: right;
    margin-top: 10rpx;
  }
  .active {
    background: #ff822e;
  }
</style>
