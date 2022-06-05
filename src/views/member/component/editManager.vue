<template>
  <div>
    <el-dialog
      title="修改管理员"
      :visible.sync="editVisible"
      width="30%"
      :before-close="closeEditVisible"
      @opened="editDatas"
    >
      <el-form :model="manager" ref="editManager" label-width="80px">
        <el-form-item
          label="用户名"
          prop="memberName"
          :rules="[
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ]"
        >
          <el-input
            type="text"
            v-model="manager.memberName"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="memberPass"
        >
          <el-input
            type="password"
            v-model="manager.memberPass"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="权限"
          prop="role"
          :rules="[{ message: '请选择权限', trigger: 'blur' }]"
        >
          <el-select v-model="manager.role" placeholder="请选择权限">
            <el-option value="1" label="管理员">管理员</el-option>
            <el-option value="0" label="超级管理员">超级管理员</el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeEditVisible">取 消</el-button>
        <el-button type="primary" @click="editManager('editManager')"
          >修 改</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "",
  props: ["editVisible", "editManagerObj"],
  data() {
    return {
      manager: {
        memberName: "",
        memberPass: "",
        role: "",
      },
    };
  },
  methods: {
    closeEditVisible() {
      this.$parent.editVisible = false;
    },
    editDatas() {
      console.log(this.$props.editManagerObj);
      this.manager=this.$props.editManagerObj
    },
    editManager(params) {
      let _that = this;
      _that.$refs[params].validate((valid) => {
        if (valid) {
          _that
            .$http({
              url: "/adminUpdate",
              method: "post",
              data: {
                id: _that.$props.editManagerObj.id,
                memberName: _that.manager.memberName, //用户名
                memberPass: _that.manager.memberPass, //密码
                role: parseInt(_that.manager.role), //权限
              },
            })
            .then(
              function (res) {
                if (res.data.code == 200) {
                  _that.$message({
                    message: "恭喜你，修改成功",
                    type: "success",
                    onClose: function () {
                      _that.$refs["editManager"].resetFields();
                      _that.$parent.editVisible = false;
                      _that.$parent.getPage(1);
                    },
                  });
                } else {
                  _that.$message({
                    message: "修改失败了",
                    type: "error",
                  });
                }
              },
              function (error) {
                console.log(error);
              }
            );
        } else {
          this.$message.error("错了哦，添加失败");
          return false;
        }
      });
    },
  },
};
</script>
<style scoped></style>
