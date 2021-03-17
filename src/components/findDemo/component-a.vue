<template>
  <div>
    组件 A
    <component-b></component-b>
  </div>
</template>
<script>
import componentB from './component-b.vue';

export default {
  name: 'componentA',
  components: { componentB },
  data () {
    return {
      name: '爸爸'
    }
  },
  methods: {
    sayHello () {
      console.log('找到爸爸了');
    }
  }
}
</script>
