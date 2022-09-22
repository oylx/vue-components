<template>
  <div>
    <i-checkbox v-model="single">单独选项</i-checkbox>
    <div>数据{{single}}</div>
    <i-checkbox-group v-model="multiple">
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
      single: false,
      multiple: ['apple'],
      checkboxGroupOptions: [
        { label: 'apple', name: '苹果' },
        { label: 'orange', name: '橘子' },
        { label: 'peach', name: '桃子' },
        { label: 'purple', name: '葡萄' },
      ]
    }
  }
}
</script>

<style scoped>

</style>
