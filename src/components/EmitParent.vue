<template>
  <emit-child @test="handleEvent">emit-child</emit-child>
</template>

<script>
import EmitChild from './EmitChild';

export default {
  name: 'EmitParent',
  components: {
    EmitChild,
  },
  methods: {
    handleEvent(text) {
      console.log(text);  // Hello Vue.js
    },
  },
};
</script>

<style scoped>

</style>
