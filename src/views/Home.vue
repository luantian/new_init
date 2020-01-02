<template>
  <div class="home">
    <top></top>
    <el-container>
      <div class="navbar">
        <nav-bar></nav-bar>
      </div>
      <el-main class="main">
        <div class="content">
          <router-view/>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>

  import Top from '@/components/Top'
  import NavBar from '@/components/NavBar'

  export default {
    name: 'Home',
    components: { Top, NavBar },
    data() {
      return {

      }
    }
  }
</script>

<style scoped lang="scss">
  .home {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .navbar {
    width: 200px;
  }
  .main {
    flex: 1;
    background: #eee;
    overflow: hidden;
    border-left: 4px solid $bgColor;
    position: relative;
  }
  .content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
  }
</style>
