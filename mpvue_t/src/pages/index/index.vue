<template>
  <div class="index-container">
    <div class="index-wrap">
      <div class="from-item" v-for="(item, index) in fromList" :key="index">
        <InputSelect
          :label="item.label"
          :formType="item.formType"
          :inputType="item.inputType"
          :dataList="item.dataList"
          :unit="item.unit"
          :formKey="item.formKey"
          @change="onChange"
        ></InputSelect>
      </div>
    </div>
    <div class="index-submit" @click="onSubmit">提交</div>
  </div>
</template>

<script>
import InputSelect from "@/components/InputSelect";

export default {
  data() {
    return {
      fromList: [
        {
          formKey: "name",
          label: "姓名",
          formType: "input",
          inputType: "text"
        },
        {
          formKey: "phone",
          label: "电话",
          formType: "input",
          inputType: "number"
        },
        {
          formKey: "amount",
          label: "金额",
          formType: "input",
          inputType: "number",
          unit: "万元"
        },
        {
          formKey: "country",
          label: "国家",
          formType: "select",
          dataList: [
            {
              label: '美国',
              value: 'USA'
            },
            {
              label: '中国',
              value: 'China'
            },
            {
              label: '巴西',
              value: 'Brazil'
            },
            {
              label: '日本',
              value: 'Japan'
            }
          ]
        }
      ],
      params: {}
    };
  },
  components: {
    InputSelect
  },
  methods: {
    onSubmit() {
      console.log(this.params);
      // const params = {

      // }
    },
    onChange(...data) {
      Object.assign(this.params, data[0])
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.index-container {
  width: 100%;
  height: 100%;
  background: #f1f1f1;
  position: absolute;
  overflow: scroll;
  padding: 20rpx 0;

  .index-submit {
    width: 100%;
    height: 88rpx;
    line-height: 88rpx;
    text-align: center;
    font-size: 36rpx;
    color: #fff;
    background: #505da8;
    position: fixed;
    bottom: 0;
  }

  .from-item {
    width: 95%;
    margin: 0 auto;
  }

  .index-wrap {
    width: 95%;
    margin: 0 auto;
    background: #fff;
    border-radius: 8rpx;
  }
}
</style>
