<!-- form.vue -->
<template>
  <form>
    <slot></slot>
  </form>
</template>
<script>
import Emitter from '../../mixins/emitter.js';
export default {
  name: 'iForm',
  mixins: [ Emitter ],
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    }
  },
  // 组件渲染时，将实例缓存在 Form 中
  mounted () {
    // 如果没有传入 prop，则无需校验，也就无需缓存
    if (this.prop) {
      this.dispatch('iForm', 'on-form-item-add', this);
    }
  },
  // 组件销毁前，将实例从 Form 的缓存中移除
  beforeDestroy () {
    this.dispatch('iForm', 'on-form-item-remove', this);
  }
}
</script>
