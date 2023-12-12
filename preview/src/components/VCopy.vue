<template>
  <div
    v-copy="{
      copyValue,
      callback: callbackCopy
    }"
  >
    有回调--- {{ copyValue }}
  </div>
  <div v-copy="`${copyValue}`">无回调--- {{ copyValue }}</div>
  <button btn @click="changeVal">改变值</button>
</template>

<script lang="ts" setup>
import { POSITION, TYPE, useToast } from "vue-toastification";
// import { copy as vCopy } from "../../../packages/directives";
const copyValue = ref("点击我复制内容");
const toast = useToast();
console.log('🍭-----toast-----', toast);
const callbackCopy = arg => {
  console.log("🐳-----arg-----", arg);
  const desc = arg?.copied ? "复制成功👌" : "复制失败🙈";
  console.log('🍧-----desc-----', desc);
  toast(desc, {
    type: arg?.copied ? TYPE.SUCCESS : TYPE.ERROR,
    position: POSITION.TOP_RIGHT
  });
};
const changeVal = () => {
  copyValue.value = "改变后的值" + Math.random();
};
</script>
