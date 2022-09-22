<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import Emitter from '@/mixins/emitter'
import { findComponentsDownward } from '@/utils/assist'

export default {
  name: 'iCheckboxGroup',
  mixins: [Emitter],
  props: {
    // v-model传入
    value: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      // 相当于created里this.currentValue = this.value,同时再watch
      currentValue: this.value,
      children: []
    }
  },
  mounted () {
    this.updateAllChildrenParentModel(true);
  },
  watch: {
    value () {
      console.log('接收到了')
      this.updateAllChildrenParentModel(true);
    }
  },
  methods: {
    updateAllChildrenParentModel(update) {
      this.children = findComponentsDownward(this, 'iCheckbox')
      if (this.children) {
        const { value } = this
        this.children.forEach(child => {
          child.parentModel = value
          if (update) {
            child.currentValue = value.indexOf(child.label) >= 0
            child.group = true
          }
        })
      }
    },
    changeParent (data) {
      this.currentValue = data;
      console.log('向上传递')
      this.$emit('input', data);
      this.$emit('on-change', data);
      this.dispatch('iFormItem', 'on-form-change', data);
    }
  }
}
</script>

<style scoped>

</style>
