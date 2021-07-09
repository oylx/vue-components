<template>
  <div>
    <input type="text" :value="name" @input="handleInputChange">
  </div>
</template>

<script>
export default {
  name: 'x-input',
  props: {
    value: [String, Number],
    placeholder: String
  },
  data() {
    return {
      name: '1',
    };
  },
  methods: {
    handleInputChange($event) {
      // this.value = $event.target.value
      this.$emit('input', $event.target.value)
    },
  },
};
</script>

<style scoped>

</style>
