<template>
  <div>
    <i-button></i-button>
    <i-button size="large">large</i-button>
    <i-button disabled>default</i-button>
    <i-button id="btn1" class="btn-submit">btn1</i-button>
    <i-button>
      <i-icon slot="icon" type="checkmark"></i-icon>
      <span>icon按钮</span>
    </i-button>
    <div>
      <i-button @on-click="handleClick1">click1</i-button>
    </div>
    <div>
      <i-button @click.native="handleClick2">click2</i-button>
    </div>

    <component-a ref="comA"></component-a>
  </div>
</template>
<script>
import IButton from './../components/iButton';
import ComponentA from './../components/componentA';

export default {
  components: {
    IButton,
    ComponentA,
  },
  methods: {
    handleClick1(i) {
      console.log(i);
    },
    handleClick2(i) {
      console.log(i);
    },
  },
  mounted() {
    const comA = this.$refs.comA;
    console.log(comA.title); // Vue.js
    comA.sayHello(); // 弹窗
  },
};
</script>
