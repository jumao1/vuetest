<template>
  <div>
    <el-dialog
      title="添加管理员"
      :visible.sync="addVisible"
      width="30%"
      :before-close="closeAddVisible"
    >
      <el-form :model="manager" ref="addManager" label-width="80px">
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
          :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]"
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
        <el-button @click="closeAddVisible">取 消</el-button>
        <el-button type="primary" @click="addManager('addManager')"
          >添 加</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "",
  props: ["addVisible"],
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
    closeAddVisible() {
      this.$parent.addVisible = false;
    },
    addManager(params) {
      let _that = this;
      _that.$refs[params].validate((valid) => {
        if (valid) {
          _that
            .$http({
              url: "/adminAdd",
              method: "post",
              data: {
                memberName: _that.manager.memberName, //用户名
                memberPass: _that.manager.memberPass, //密码
                role: parseInt(_that.manager.role), //权限
              },
            })
            .then(
              function (res) {
                if (res.data.code == 200) {
                  _that.$message({
                    message: "恭喜你，添加成功",
                    type: "success",
                    onClose: function () {
                      _that.$refs["addManager"].resetFields();
                      _that.$parent.addVisible = false;
                      _that.$parent.getPage(1);
                    },
                  });
                } else {
                  _that.$message({
                    message: "添加失败了",
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
