<template>
  <div>
    {{ name }}
  </div>
</template>
<script>
export default {
  inject: ['name'],
  data() {
    return {
      // name: '1234',
    };
  },
  mounted() {
    console.log(this.name);
    // setTimeout(() => {
    //   this.currName = this.name;
    //   console.log(this.name);
    // }, 1000);
    
  },
};
</script>
<style scoped></style>
