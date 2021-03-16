<template>
  <div>
    <button @click="handleEmitEvent">触发自定义事件</button>
  </div>
</template>

<script>
export default {
  name: 'EmitChild',
  methods: {
    handleEmitEvent () {
      // 在当前组件上触发自定义事件 test，并传值
      this.$emit('test', 'Hello Vue.js')
    }
  },
  mounted () {
    // 监听自定义事件 test
    this.$on('test', (text) => {
      console.log(2, text);
    });
  }
};
</script>

<style scoped>

</style>
