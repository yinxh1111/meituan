<template>
  <div class="layout-default">
    <el-container>
      <el-header height="">
        <my-heard />
      </el-header>
      <el-main><router-view></router-view></el-main>
      <el-footer><my-footer /></el-footer>
    </el-container>
  </div>
</template>
<script>
import MyHeard from '@/components/header/index'
import MyFooter from '@/components/footer/index'
export default {
  components: {
    MyHeard,
    MyFooter
  }
}
</script>
<style lang="scss">
@import "@/assets/css/public/header/index.scss";

    @import '@/assets/css/public/layout.scss';
</style>
