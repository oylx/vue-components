<template>
  <label>
    <span>
      <input v-if="group" type="checkbox" :disabled="disabled" :value="label" v-model="parentModel" @change="change">
      <input v-else type="checkbox" :disabled="disabled" :checked="currentValue" @change="change">
    </span>
    <slot></slot>
  </label>
</template>

<script>
import { findComponentUpward } from '@/utils/assist'
import Emitter from '@/mixins/emitter'

const trueValue = true
const falseValue = false
export default {
  name: 'iCheckbox',
  mixins: [Emitter],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    // v-model传入，仅在checkbox用，checkbox-group不用
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    // checkbox-group中的checkbox使用
    label: {
      type: [ String, Number, Boolean ]
    }
  },
  data() {
    return {
      // 相当于created里this.currentValue = this.value,同时再watch
      currentValue: this.value,
      group: false,
      parentModel: [],
      parent: false,
    }
  },
  mounted() {
    // 是否更新当前model
    this.parent = findComponentUpward(this, 'iCheckboxGroup')
    this.group = !!this.parent
  },
  watch: {
    value(val) {
      if ([trueValue, falseValue].includes(val)) this.updateCurrModel()
      else throw 'Value should be trueValue or falseValue.'
    }
  },
  methods: {
    change(event) {
      if (this.disabled) return
      const value = !!event.target.checked
      this.currentValue = value
      this.$emit('input', value)
      if (this.group) this.parent.changeParent(this.parentModel)
      else {
        this.$emit('inputChange', value)
        this.dispatch('iFormItem', 'on-form-change', value)
      }
    },
    updateCurrModel() {
      this.currentValue = this.value
    }
  }
}
</script>

<style scoped>

</style>
