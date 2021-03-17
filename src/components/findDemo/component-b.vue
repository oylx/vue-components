<template>
  <div>
    组件 B
  </div>
</template>
<script>
import { findComponentUpward } from '@/utils/assist';

export default {
  name: 'componentB',
  mounted () {
    const comA = findComponentUpward(this, 'componentA');

    if (comA) {
      console.log(comA.name);  // 爸爸
      comA.sayHello();  // 找到爸爸了
    }
  }
}
</script>
