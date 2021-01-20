<template>
  <div>
    {{ currName }}
  </div>
</template>
<script>
export default {
  inject: ['name'],
  data() {
    return {
      currName: '1234',
    };
  },
  mounted() {
    setTimeout(() => {
      this.currName = this.name;
    }, 1000);
  },
};
</script>
<style scoped></style>
