<template>
  <div class="login_back">
    <div class="login_box">
      <h1>VUE-ADMIN 后台管理系统</h1>
      <el-form :model="form" label-width="0px" :rules="rules" ref="ruleForm">
        <el-form-item prop="userName">
          <el-input
            v-model="form.userName"
            placeholder="请输入账号"
            prefix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            placeholder="请输入密码"
            prefix-icon="el-icon-key"
          ></el-input>
        </el-form-item>
        <el-form-item prop="passNum">
          <el-col :span="13">
            <el-input
              v-model="form.passNum"
              placeholder="请输入验证码"
              prefix-icon="el-icon-s-help"
            ></el-input>
          </el-col>
          <el-col :span="11">
            <canvas id="verCanvas" width="160" height="40"></canvas>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录系统</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import MakeCode from "../assets/makeCode";
export default {
  data() {
    return {
      form: {
        userName: "",
        password: "",
        passNum: "",
      },
      rules: {
        userName: [
          { required: true, message: "账号不能为空", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
        ],
        passNum: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 4, max: 4, message: "验证码错误", trigger: "blur" },
        ],
      },
      passwordNum: "",
    };
  },
  created() {},
  mounted() {
    var verCanvas = document.getElementById("verCanvas");
    var verValue = (this.passwordNum = MakeCode(verCanvas));
    verCanvas.onclick = function () {
      this.passwordNum = verValue = MakeCode(verCanvas);
    };
  },
  methods: {
    login() {
      this.$refs["ruleForm"].validate((valid) => {
        if (valid && this.passwordNum == this.form.passNum.toLowerCase()) {
          window.sessionStorage.setItem("token", true);
          this.$router.push("/");
        } else {
          var verCanvas = document.getElementById("verCanvas");
          var verValue = (this.passwordNum = MakeCode(verCanvas));
          return false;
        }
      });
    },
  },
  computed: {},
};
</script>

<style lang='scss' scoped>
.login_back {
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #20a0ff;
}
.login_box {
  margin-top: -20px;
  width: 500px;
  height: 340px;
  margin: 0 auto;
  color: white;
  text-align: center;
}
.el-form {
  margin-top: 40px;
  padding: 20px;
  box-sizing: border-box;
  background-color: #ffffff;
}
.el-button {
  float: right;
  width: 200px;
}
.passNum {
  width: 150px;
  height: 40px;
  background-color: #80fbff;
  float: right;
  cursor: pointer;
  font-size: 20px;
}
</style>