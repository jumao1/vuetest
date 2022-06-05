<template>
  <div class="logout">
      <el-avatar :size="30" :src="circleUrl"></el-avatar>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          用户<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>安全中心</el-dropdown-item>
          <el-dropdown-item command="loginOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
  </div>
</template>
<script>
export default {
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    };
  },
  methods:{
    handleCommand(loginOut){
      window.sessionStorage.clear();//清空token
      this.$router.push("/")//跳转到登陆
    }
  }
};
</script>
<style scoped>
el-table {
  margin: 0 auto;
}
el-dropdown {
  line-height: 30px;
}
.logout {
  width: 100px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-content: space-around;
}
</style>