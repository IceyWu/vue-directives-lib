<template>
  <div class="flex flex-col gap-2 mb-2 justify-center items-center">
    <button
      class="btn max-w-[500px]"
      v-typed="{
        value: copyValue1,
        typeSpeed: 300,
        loop: false,
        unique: 'test-flag',
        onComplete: callbackTyped
      }"
    ></button>
    <button class="btn max-w-[500px]" v-typed="`${copyValue2}`"></button>
  </div>
</template>

<script lang="ts" setup>
import { POSITION, TYPE, useToast } from "vue-toastification";
import type { TypeCallBack } from "../../../packages";
const copyValue1 = ref("点击我复制内容");
const copyValue2 = ref("点击我复制内容");
const toast = useToast();
const callbackTyped = (arg: TypeCallBack) => {
  console.log("🐬-----arg-----", arg);
  toast("打字完成" + arg.index, {
    type: TYPE.SUCCESS,
    position: POSITION.TOP_RIGHT
  });
};
</script>
