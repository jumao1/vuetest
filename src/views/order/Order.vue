<template>
  <div id="app">
    <div class="menu">
      <el-button type="primary" @click="orderAddStatus">添加</el-button>
      <el-input placeholder="请输入检索内容">
        <template slot="append">
          <el-button>搜索</el-button>
        </template>
      </el-input>
    </div>
    <div>
      <el-dialog title="订单添加" :visible.sync="orderAddVisible" width="80%">
        <el-form :inline="true" :model="orderData" class="demo-form-inline">
          <div class="formTop">
            <el-form-item label="客户">
              <el-input placeholder="客户姓名"></el-input>
            </el-form-item>
            <el-form-item label="付款方式">
              <el-select
                placeholder="请选择付款方式"
                v-model="orderData.payType"
              >
                <el-option label="微信" value="微信">微信</el-option>
                <el-option label="支付宝" value="支付宝">支付宝</el-option>
                <el-option label="现金" value="现金">现金</el-option>
                <el-option label="银行卡" value="银行卡">银行卡</el-option>
                <el-option label="欠款" value="欠款">欠款</el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="商家">
              <el-input placeholder="请输入内容"></el-input>
            </el-form-item>
          </div>
          <div class="formBtm">
            <div class="formLeft">
              <el-form-item label="产品名称">
                <el-input placeholder="产品名称"></el-input>
              </el-form-item>
              <el-form-item label="产品单位">
                <el-input placeholder="产品单位"></el-input>
              </el-form-item>
              <el-form-item label="数量">
                <el-input placeholder="数量"></el-input>
              </el-form-item>
              <el-form-item label="单价">
                <el-input placeholder="单价"></el-input>
              </el-form-item>
              <el-form-item label="总价">
                <el-input disabled placeholder="总价"></el-input>
              </el-form-item>
            </div>
            <div class="formRight"></div>
          </div>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="orderAddVisible = false">取 消</el-button>
          <el-button type="primary" @click="orderAddVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  name: "order",
  data() {
    return {
      orderAddVisible: false,
      payType: "",
      orderData: {
        user: "",
        region: "",
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    orderAddStatus() {
      this.orderAddVisible = true;
    },
  },
};
</script>
<style scoped>
.el-input-group {
  width: 40%;
}
.formTop{
  display: flex;
  flex-flow: row nowrap;
}
.formBtm{
  display: flex;
  justify-content: space-between;
}
.formLeft{
  flex:1;
  border:1px solid red;

}
.formRight{
  flex: 1;
  border: 1px solid red;
}
</style>