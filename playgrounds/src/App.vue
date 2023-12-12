<template>
  <div
    font-sans
    text="center gray-700 dark:gray-200"
    class="w-full h-screen flex flex-col"
  >
    <div class="sticky top-0"><TheHeader /></div>
    <div class="w-full box-border">
      <ul class="flex flex-col gap-5 list-none">
        <li
          v-for="item in showList"
          :key="item.title"
          class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4"
        >
          <div class="text-xl font-bold">{{ item.title }}</div>
          <div class="mt-2">
            <component :is="item.components"></component>
          </div>
        </li>
      </ul>
      
    </div>
  </div>
</template>
<script setup lang="ts">
import VCopy from "./components/VCopy.vue";
import VTooltip from "./components/VTooltip.vue";
import VLongpress from "./components/VLongpress.vue";
import VLoading from "./components/VLoading.vue";
const showList = [
  {
    title: "VCopy",
    components: VCopy
  },
  {
    title: "VTooltip",
    components: VTooltip
  },
  {
    title: "VLongpress",
    components: VLongpress
  },
  {
    title: "VLoading",
    components: VLoading
  },
];
</script>
