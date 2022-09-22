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
    value: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentValue: this.value,
      children: []
    }
  },
  mounted () {
    this.updateParentModel(true);
  },
  watch: {
    value () {
      this.updateParentModel(true);
    }
  },
  methods: {
    updateParentModel(update) {
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
      this.$emit('input', data);
      this.$emit('on-change', data);
      this.dispatch('iFormItem', 'on-form-change', data);
    }
  }
}
</script>

<style scoped>

</style>
