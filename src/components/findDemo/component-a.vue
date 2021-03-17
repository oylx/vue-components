<template>
  <div>
    组件 A
    <span>haha</span>
    <component-b></component-b>
    <component-b></component-b>
    <button @click="testDebounce">debounce测试</button>
    <button @click="testThrottle">throttle测试</button>
  </div>
</template>
<script>
import componentB from './component-b.vue';
import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle'
import { findComponentDownward } from '@/utils/assist.js';

export default {
  name: 'componentA',
  components: { componentB },
  data () {
    return {
      name: '爸爸👨'
    }
  },
  methods: {
    sayHello () {
      console.log('找到爸爸了');
    },
    testDebounce:debounce(()=>{
      console.log('debounce');
    },2000),
    testThrottle: throttle(() => {
      console.log('throttle');
    },1000)
  },
  mounted () {
    console.log('轮到爸爸表演了:');
    const comB = findComponentDownward(this, 'componentB');
    if (comB) {
      console.log(comB.name);  // 儿子
      comB.sayHello();  // 找到儿子了
    }
  }
}
</script>
