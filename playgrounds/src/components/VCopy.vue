<template>
  <div class="flex flex-col gap-2 mb-2 justify-center items-center">
    <button
      class="btn max-w-[500px]"
      v-copy="{
        copyValue: copyValue1,
        callback: callbackCopy
      }"
    >
      有回调--- {{ copyValue1 }}
    </button>
    <button class="btn max-w-[500px]" v-copy="`${copyValue2}`">
      无回调--- {{ copyValue2 }}
    </button>
  </div>
  <div fcc gap-2>
    <button btn @click="changeVal(1)">改变值-有回调</button>
    <button btn @click="changeVal(2)">改变值-无回调</button>
  </div>
</template>

<script lang="ts" setup>
import { POSITION, TYPE, useToast } from "vue-toastification";
import type { CopyCallBack } from "../../../packages";
const copyValue1 = ref("点击我复制内容");
const copyValue2 = ref("点击我复制内容");
const toast = useToast();
const callbackCopy = (arg: CopyCallBack) => {
  console.log("🐬-----arg-----", arg);
  const { copyValue } = arg;
  const desc = arg?.copied ? `👌复制成功:${copyValue}` : "复制失败🙈";
  // console.log("🍧-----desc-----", desc);
  toast(desc, {
    type: arg?.copied ? TYPE.SUCCESS : TYPE.ERROR,
    position: POSITION.TOP_RIGHT
  });
};
const changeVal = (index: number) => {
  if (index === 1) {
    copyValue1.value = "改变后的值" + Math.random();
  } else {
    copyValue2.value = "改变后的值" + Math.random();
  }
};
</script>
