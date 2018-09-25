<template>
  <div class="form-wrap">
    <div class="index-input" v-if="formType === 'input'">
      {{ label }}
      <input v-if="inputType === 'number'" type="number" v-model="formVal" :placeholder="placeholder + label" @change="getValue(formKey)">
      <input v-else type="text" v-model="formVal" :placeholder="placeholder + label" @change="getValue(formKey)">
      <span v-if="unit">{{ unit }}</span>
    </div>
    <div class="index-picker" v-if="formType === 'select'">
      {{ label }}（请选择）
      <select class="picker-con" @change="getValue" @click="clickValue(formKey, dataList)" value="0" :range="dataList" range-key="label">
        {{ dataList[pickIndex].label }}
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      placeholder: "请输入",
      formVal: '',
      pickIndex: '0',
      fKey: '',
      pickList: []
    };
  },
  methods: {
    clickValue(key, data) {
      this.fKey = key
      this.pickList = data
    },
    getValue(key) {
      if (!key.mp) {
        this.fKey = key
      } else {
        this.pickIndex = key.mp.detail.value
        this.formVal = this.pickList[this.pickIndex].value
      }
      // console.log(this.fKey, this.formVal)
      const valObj = {}
      // valObj[this.fKey] = this.formVal
      valObj['key'] = this.fKey
      valObj['value'] = this.formVal
      this.$emit('change', valObj) // 子组件向父组件传值
    }
  },
  props: ["label", "formType", "inputType", "dataList", "unit", "formKey"]
};
</script>

<style lang="scss" scoped>
.form-wrap {
  width: 100%;
  height: 88rpx;
  border-top: 1rpx solid #eee;

  .index-picker {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 28rpx;
    color: #333;
    text-align: right;
    .picker-con {
      flex: 1;
      height: 100%;
      line-height: 88rpx;
    }
  }

  .index-input {
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 28rpx;
    color: #333;
    input {
      flex: 1;
      text-align: right;
    }
    span {
      padding-left: 20rpx;
    }
  }
}
</style>
