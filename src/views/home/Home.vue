<template>
  <div id="home">
    <el-container>
      <el-aside width="200px">
        <Navmenu></Navmenu>
      </el-aside>
      <el-container>
        <el-header>
          <LogOut></LogOut>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Navmenu from "../home/component/Navmenu.vue";
import LogOut from "../home/component/LogOut.vue";
export default {
  name: "home",
  components: {
    Navmenu,
    LogOut,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
</style>