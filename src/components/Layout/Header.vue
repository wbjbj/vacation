<template>
  <el-header style="height: 48px">
    <div @click="changeMenus">
        i
    </div>
  </el-header>
</template>

<script>
export default {
  data() {
    return {
      open: true,
    };
  },
  created() {},
  mounted() {},
  methods: {
    changeMenus() {
      this.$store.commit('changeOpen',!this.$store.state.menuOpen)
    },
  },
  computed: {},
};
</script>

<style lang='scss' scoped>
.el-header {
  line-height: 48px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>