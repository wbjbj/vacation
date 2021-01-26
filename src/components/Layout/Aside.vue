<template>
  <el-aside :width="$store.state.menuOpen ? '200px' : '64px'">
    {{ $store.state.menuOpen }}
  </el-aside>
</template>

<script>
export default {
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
.el-aside {
  background-color: #bbbbbb;
  color: #333;
  text-align: center;
  line-height: 200px;
}
</style>