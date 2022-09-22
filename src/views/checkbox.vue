<template>
  <div>
    <i-checkbox v-model="single" @inputChange="handleSingleChange">单独选项</i-checkbox>
    <div>数据{{single}}</div>
    <i-checkbox-group v-model="multiple" @change="handleMultipleChange">
      <i-checkbox v-for="(item, i) in checkboxGroupOptions" :key="i" v-bind="item">{{ item.name }}</i-checkbox>
    </i-checkbox-group>
    <div>数据{{multiple}}</div>
  </div>
</template>

<script>
import ICheckbox from '@/components/checkbox/checkbox'
import ICheckboxGroup from '@/components/checkbox/checkboxGroup'
export default {
  name: 'checkbox',
  components: { ICheckboxGroup, ICheckbox },
  data() {
    return {
      single: true,
      multiple: ['apple'],
      checkboxGroupOptions: [
        { label: 'apple', name: '苹果' },
        { label: 'orange', name: '橘子' },
        { label: 'peach', name: '桃子' },
        { label: 'purple', name: '葡萄' },
      ]
    }
  },
  methods: {
    handleSingleChange(val) {
      console.log('接收', val)
    },
    handleMultipleChange(val) {
      console.log('接收', val)
    }
  }
}
</script>

<style scoped>

</style>
