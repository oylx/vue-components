<template>
  <div>
    <button @click="broadcastTest">父组件A---触发事件</button>
    <dispatch-child></dispatch-child>
  </div>
</template>

<script>
import DispatchChild from './dispatchChild';
import Emitter from '@/mixins/emitter';

export default {
  name: 'broadcastParent',
  components: { DispatchChild },
  mixins: [Emitter],
  created() {
    this.$on('event-from-child', this.showMessage);
  },
  methods: {
    broadcastTest() {
      this.broadcast('dispatchChild', 'event-from-parent', 'from parent:hi');
    },
    showMessage(text) {
      window.alert(text, '爸爸收到');
    },
  },
};
</script>

<style scoped>

</style>
