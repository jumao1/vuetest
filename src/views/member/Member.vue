<template>
  <div>
    <div class="menu">
      <el-button type="primary" @click="addVisible = true">添加</el-button>
    </div>
    <el-table :data="managerList" style="width: 100%" v-loading="loading">
      <el-table-column prop="id" label="ID" width="180"> </el-table-column>
      <el-table-column prop="memberName" label="用户名" width="180">
      </el-table-column>
      <el-table-column prop="role" label="权限">
        <template v-slot="scope">
          <p>{{ scope.row.role === 0 ? "超级管理员" : "管理员" }}</p>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template v-slot="scope">
          <el-button type="primary" size="mini" @click="handleEdit(scope.row)">
            编辑
          </el-button>
          &nbsp;&nbsp;
          <el-popconfirm
            title="这是一段内容确定删除吗？"
            @confirm="handleDel(scope.row.id)"
          >
            <el-button type="danger" size="mini" slot="reference"
              >删除</el-button
            >
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="getPage"
      :total="managerCode"
    >
    </el-pagination>

    <!-- 弹框 -->
    <add-manager :addVisible="addVisible"></add-manager>
    <edit-manager :editVisible="editVisible" :editManagerObj="editManagerObj"></edit-manager>
  </div>
</template>
<script>
import addManager from "./component/addManager.vue";
import editManager from "./component/editManager.vue";
import {getPage} from "@/api/manager.js"
export default {
  name: "member",
  components: {
    addManager,
    editManager,
  },
  data() {
    return {
      addVisible: false,
      editVisible: false,
      loading: false,
      editManagerObj: {},
      managerCode: 0,
      managerList: [],
    };
  },
  created() {
    this.getPage(1);
  },
  mounted() {},
  methods: {
    addMemberShow() {
      this.addMemberVisible = true;
    },
    //async 与 await 必须配合使用解决 .then 回调 
    async getPage(page) {
      var _this = this;
      _this.loading = true;
      // var manager = JSON.parse(sessionStorage.getItem("manager"));
      let result = await getPage(page,10)
      if(result.data.code == 200) {
        _this.managerCode = result.data.data.count
        _this.managerList = result.data.data.list
        _this.loading = false;
      }

      //  getPage(1,10).then(
      //     function (res) {
      //       (_this.managerCode = res.data.data.count),
      //         (_this.managerList = res.data.data.list);
      //       _this.loading = false;
      //     },
      //     function (err) {
      //       console.log(err);
      //       _this.loading = false;
      //     }
      //   );
      // _this.$http
      //   .get("/adminList", {
      //     params: {
      //       page: page,
      //       pageSize: 10,
      //     },
      //   })
      //   .then(
      //     function (res) {
      //       (_this.managerCode = res.data.data.count),
      //         (_this.managerList = res.data.data.list);
      //       _this.loading = false;
      //     },
      //     function (err) {
      //       console.log(err);
      //       _this.loading = false;
      //     }
      //   );
    },
    handleEdit(obj) {
      this.editManagerObj = obj;
      this.editVisible = true;
    },
    handleDel(id) {
      console.log(id);
      let _that = this;
      _that.$http
        .delete("/adminDel", {
          params: {
            id: id,
          },
        })
        .then(
          function (res) {
            if (res.data.code == 200) {
              _that.$message({
                message: "删除成功",
                type: "success",
                duration: 1000,
                onClose: function () {
                  _that.getPage(1);
                },
              });
            } else {
              _that.$message({
                message: "删除失败",
                type: "error",
                duration: 1000,
              });
            }
          },
          function (error) {
            console.log(error);
          }
        );
    },
  },
};
</script>
<style scoped>
.menu {
  width: 100%;
  background-color: #fff;
  padding: 10px;
  box-sizing: border-box;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
</style>
