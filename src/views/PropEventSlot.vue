<template>
  <div>
    <EmitParent></EmitParent>
    <provideA />
    <BroadcastParent></BroadcastParent>
  </div>
</template>
<script>
import provideA from './../components/provideA';
import EmitParent from '@/components/EmitParent';
import BroadcastParent from '@/components/broadcastParent';

export default {
  components: {
    BroadcastParent,
    EmitParent,
    provideA,
  },
  methods: {},
  mounted() {},
};
</script>
