<template>
  <div class="hello">
jhkjhkjh
  </div>
</template>

<script>
  import Camp from '@/models/Camp';

  export default {
    name: 'HelloWorld',
    data() {
      return {
        campInfo: {}
      }
    },
    created() {
      this.getCampList();
      // throw new Error();
    },
    methods: {
      getCampList() {
        Camp.getList({}, (data) => {
          this.campInfo = data.data;
        });
      },
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
