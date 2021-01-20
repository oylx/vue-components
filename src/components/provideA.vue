<template>
  <div>
    <B />
  </div>
</template>
<script>
import B from './provideB';
export default {
  components: {
    B,
  },
  provide: {
    name: 'A给B起了一个很长的名字，在B里面展示',
  },
};
</script>
<style scoped></style>
