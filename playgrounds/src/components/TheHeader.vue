<script setup lang="ts">
onMounted(() => {});
</script>

<template>
  <div
    :class="isDark ? 'header-dark' : 'header-normal'"
    class="h-[55px] w-full flex items-center box-border px-[40px]"
  >
    <div font-bold text="2xl">Playgrounds🌟!</div>
    <div flex-1></div>
    <div class="flex h-full items-center gap-5">
      <div
        @click="toggleDark()"
        icon-btn
        dark:i-carbon-moon
        i-carbon-sun
        title="Change Theme"
      />
      <a
        icon-btn
        i-carbon-logo-github
        rel="noreferrer"
        href="https://github.com/IceyWu"
        target="_blank"
        title="GitHub"
      />
    </div>
  </div>
</template>

<style scoped>
.header-normal {
  background-image: radial-gradient(transparent 1px, #fff 1px);

  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(4px);
  border-bottom: 1px solid #dcdfe6;
}
.header-dark {
  background-image: radial-gradient(transparent 1px, #141414 1px);
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(4px);

  border-bottom: 1px solid #4c4d4f;
}
</style>
