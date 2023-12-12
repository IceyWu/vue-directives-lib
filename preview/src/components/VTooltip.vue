<template>
    <!-- <div v-copy="copyValue">{{copyValue}}</div> -->
    <div class="w-full fcc gap-4">
      <h2>hover在后面文字上：</h2>
      <div class="bg-blue-400" v-tooltip style="width: 100px">{{ tooltipValue }}</div>
    </div>
  </template>
  
  <script lang="ts" setup>
  // import { tooltip as vTooltip } from "../../../packages/directives";
  const tooltipValue = ref(
    "lore ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam."
  );
  </script>
  