<template>
  <div>
    <el-row>
      <el-col>
        <h1 id="logo">finance</h1>
        <el-menu default-active="member">
          <el-menu-item index="member" @click="jump('member')">
            <i class="el-icon-user"></i>
                <span slot="title">管理员</span>
            <i class="el-submenu__icon-arrow el-icon-arrow-right" />
          </el-menu-item>
          <el-menu-item index="datas" @click="jump('datas')">
            <i class="el-icon-pie-chart"></i>
                <span slot="title">数据统计</span>
            <i class="el-submenu__icon-arrow el-icon-arrow-right" />
          </el-menu-item>
          <el-menu-item index="product" @click="jump('product')">
            <i class="el-icon-box"></i>
                <span slot="title">产品管理</span>
            <i class="el-submenu__icon-arrow el-icon-arrow-right" />
          </el-menu-item>
          <el-menu-item index="classify" @click="jump('classify')">
            <i class="el-icon-files"></i>
                <span slot="title">分类管理</span>
            <i class="el-submenu__icon-arrow el-icon-arrow-right" />
          </el-menu-item>
          <el-menu-item index="order" @click="jump('order')">
            <i class="el-icon-tickets"></i>
                <span slot="title">订单管理</span>
            <i class="el-submenu__icon-arrow el-icon-arrow-right" />
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name:"Navmenu",
  data(){
    return{

    }
  },
  methods:{
    jump(params){
      this.$router.push({path:"/" + params})
    }
  }
}
</script>
<style scoped>
#logo {
  height: 60px;
  line-height: 60px;
  background-color: #b3c0d1;
  line-height: 60px;
  text-align: center;
  color: #409EFF;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: left;
}

.el-aside .el-menu span {
  display: inline-block;
  width: 88px;
  text-align: left;
}
</style>