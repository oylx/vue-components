<template>
  <div>
    组件 B
  </div>
</template>
<script>
import { findComponentUpward, findBrothersComponents } from '@/utils/assist';

export default {
  name: 'componentB',
  data () {
    return {
      name: '儿子👦'
    }
  },
  methods: {
    sayHello () {
      console.log('找到儿子了');
    }
  },
  mounted () {
    console.log('儿子开始表演了:');
    const comA = findComponentUpward(this, 'componentA');

    if (comA) {
      console.log(comA.name);  // 爸爸
      comA.sayHello();  // 找到爸爸了
    }
    console.log('儿子开始找兄弟了');
    const comsB = findBrothersComponents(this, 'componentB');
    console.log(comsB);  // ① []，空数组
  }
}
</script>
