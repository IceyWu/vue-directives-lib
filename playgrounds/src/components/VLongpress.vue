<template>
  <div class="w-full  fcc">
    <h2>请长按：</h2>
    <button v-longpress="{ pressTime: 500, callback: onEndFunc }" btn>
      长按2s
    </button>
  </div>
</template>

<script lang="ts" setup>
import { POSITION, TYPE, useToast } from "vue-toastification";
const toast = useToast();
const onEndFunc = () => {
  console.log("🍪-----res-----");
  toast("长按结束", {
    type: TYPE.SUCCESS,
    position: POSITION.TOP_RIGHT
  });
};
</script>
