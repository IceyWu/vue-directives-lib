<template>
  <div
    font-sans
    text="center gray-700 dark:gray-200"
    class="w-full h-screen flex flex-col"
  >
    <div class="sticky top-0"><TheHeader /></div>
    <div class="w-full box-border">
      <VTooltip />
    </div>
  </div>
</template>
<script setup lang="ts">
import VTooltip from "./components/VTooltip.vue";
</script>
