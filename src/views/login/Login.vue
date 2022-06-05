<template>
  <div id="login" v-loading="loading" element-loading-text="拼命加载中">
    <main>
      <h2>金融后台管理</h2>
      <input type="text" v-model="userName" placeholder="请输入用户名" autocomplete="off"/>
      <input type="password" v-model="userPwd" placeholder="请输入密码" autocomplete="off" @keyup.enter="login"/>
      <button @click="login">登录</button>
    </main>
  </div>
</template>


<script>
export default {
  name: "login",
  data() {
    return {
      loading:false,
      userName: "",
      userPwd: "",
    };
  },
  methods: {
    login() {
      var _this = this;
      this.loading = true;
      // console.log(this.userName, this.userPwd);
      _this.$http
        .post("/login", {
          memberName: _this.userName, //用户名
          memberPass: _this.userPwd, //密码
        })
        .then(
          function (res) {
            if (res.data.code == 201 || res.data.code == 406) {
             _this.$message({
                message: res.data.info,
                type: "error",
                duration:1500,
                onClose: function () {
                  _this.loading = false;
                },
              })
            } else {
              _this.$message({
                message: res.data.info,
                type: "success",
                duration:1500,
                onClose: function () {
                  _this.loading = false;
                  sessionStorage.setItem("manager",JSON.stringify(res.data.data))
                  _this.$router.push({ path: "/member" });
                },
              });
            }
          },
          function (error) {
            console.log(error)
          }
        );
    },
  },
  created(){

  },
};
</script>


<style scoped>
h2 {
  margin: 0 auto;
  color: dodgerblue;
}
#login {
  width: 100vw;
  height: 100vh;
  background: url("../../assets/images/loginbg.jpg") no-repeat 0 0;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#login main {
  display: flex;
  flex-direction: column;
  width: 450px;
  padding: 20px;
  box-sizing: border-box;
  height: 300px;
  justify-content: center;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.7);
}
#login input {
  height: 35px;
  padding-left: 5px;
  margin: 10px 0;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #ddd;
}
#login button {
  padding: 10px 0;
  border: none;
  color: #ffffff;
  border-radius: 5px;
  background-color: rgb(75, 193, 240);
}
</style>