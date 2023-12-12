<template>
  <div class="w-full fcc gap-4">
    <button btn @click="isLoaidng = isLoaidng">展示--{{ isLoaidng }}</button>
    <div v-loading="isLoaidng">4545</div>
  </div>
</template>

<script lang="ts" setup>
// import  { clickoutside as vClickoutside } from "../../../packages";
const isLoaidng = ref(false);
</script>
