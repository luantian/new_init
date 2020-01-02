<template>
  <div class="nav-bar">

  </div>
</template>

<script>

  import NavBarModel from '@/models/NavBar'

  export default {
    name: 'NavBar',
    data() {
      return {

      }
    },
    created() {
      this.getData();
    },
    methods: {
      getData() {
        NavBarModel.getData({id: 2}, (data) => {
          console.log('navbar-data', data);
        })
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
