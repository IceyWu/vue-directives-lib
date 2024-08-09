<template>
  <div class="flex flex-col gap-2 mb-2 justify-center items-center">
    <button btn @click="isHidden = !isHidden">
      {{ isHidden ? "展示" : "隐藏" }}
    </button>
    <h4 v-hidden="isHidden">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vel
      veritatis eos esse sint necessitatibus ipsum incidunt numquam nulla
      placeat nemo pariatur quia similique adipisci doloribus impedit, natus,
      est ab!
    </h4>
  </div>
</template>

<script lang="ts" setup>
const isHidden = ref(false);
</script>
