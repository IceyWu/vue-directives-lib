<template>
    <!-- <div v-copy="copyValue">{{copyValue}}</div> -->
    <div class="w-full bg-red-400 fcc">
      <div class="bg-blue-400" v-tooltip style="width: 100px">{{ tooltipValue }}</div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { tooltip as vTooltip } from "../../../packages/directives";
  const tooltipValue = ref(
    "lore ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam."
  );
  </script>
  