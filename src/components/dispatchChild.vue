<template>
  <button @click="handleDispatch">儿子触发事件dispatch🚀</button>
</template>

<script>
import Emitter from './../mixins/emitter';

export default {
  name: 'dispatchChild',
  mixins: [Emitter],
  created() {
    this.$on('event-from-parent', this.showMessage);
  },
  methods: {
    handleDispatch() {
      this.dispatch('broadcastParent', 'event-from-child', 'from child: hi');
    },
    showMessage(text) {
      window.alert(text);
      window.alert('儿子收到');
    },
  },
};
</script>

<style scoped>

</style>
