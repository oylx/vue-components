<template>
  <label>
    <span>
      <input v-if="group" type="checkbox" :disabled="disabled" :value="label" v-model="parentModel" @change="change">
      <input v-else  type="checkbox" :disabled="disabled" :checked="currentValue" @change="change">
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
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    label: {
      type: [ String, Number, Boolean ]
    }
  },
  data() {
    return {
      currentValue: this.value,
      group: false,
      parentModel: [],
      parent: false,
    }
  },
  mounted() {
    this.parent = findComponentUpward(this, 'iCheckboxGroup')
    this.group = !!this.parent
    if (this.group) this.parent.updateParentModel(true)
    else this.updateCurrModel()
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
      const checked = event.target.checked
      this.currentValue = checked
      const value = !!checked
      this.$emit('input', value)
      if (this.group) {
        this.parent.changeParent(this.parentModel)
      }
      else {
        this.$emit('on-change', value)
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
