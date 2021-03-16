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
  data() {
    return {
      name: 'Aresn',
    };
  },
  provide: {
    name: 'A给B起了一个很长的名字，在B里面展示',
  },
  mounted() {
    console.log(this.name); // Aresn
  },
};
</script>
<style scoped></style>
