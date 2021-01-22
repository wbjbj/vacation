<template>
  <el-container>
    <Aside></Aside>
    <el-container>
      <Header></Header>
      <Main></Main>
    </el-container>
  </el-container>
</template>

<script>
import Header from "./Header";
import Aside from "./Aside";
import Main from "./Main";
export default {
  components: {
    Header,
    Aside,
    Main,
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {},
};
</script>

<style lang='scss' scoped>
#app > .el-container {
  display: flex;
  height: 100%;
  .el-container {
    height: 100%;
    display: block;
    position: relative;
  }
}
</style>