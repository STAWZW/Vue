<template>
  <div class="home">
    <el-row>
      <el-button @click="$router.push({ name: 'TableTemplate' })">表格模板</el-button>
      <el-button type="primary">...</el-button>
      <el-button type="success">...</el-button>
      <el-button type="info">...</el-button>
      <el-button type="warning">...</el-button>
      <el-button type="danger">...</el-button>
    </el-row>

    <el-row>
      <el-button plain>...</el-button>
      <el-button type="primary" plain>...</el-button>
      <el-button type="success" plain>...</el-button>
      <el-button type="info" plain>...</el-button>
      <el-button type="warning" plain>...</el-button>
      <el-button type="danger" plain>...</el-button>
    </el-row>

    <el-row>
      <el-button round>...</el-button>
      <el-button type="primary" round>...</el-button>
      <el-button type="success" round>...</el-button>
      <el-button type="info" round>...</el-button>
      <el-button type="warning" round>...</el-button>
      <el-button type="danger" round>...</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
