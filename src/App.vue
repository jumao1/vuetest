<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
input,button{
  outline: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  /* line-height: 60px; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
}


.el-main {
  background-color: #e9eef3;
  color: #333;
}

.el-container {
  margin-bottom: 40px;
  height: 100vh;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}

.el-table__header-wrapper{
  line-height: 50px;
}

</style>
