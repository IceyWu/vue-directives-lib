<template>
  <!-- <div v-copy="copyValue">{{copyValue}}</div> -->
  <div class="w-full fcc gap-4">
    <h2>hover在后面文字上：</h2>
    <div
      v-ellipsis="{
        content: tooltipValue
      }"
      style="width: 100px; "
    ></div>
    <!-- <div
      v-ellipsis="{
        content: tooltipValue
      }"
      style="width: 100px; "
    ></div> -->
  </div>
</template>

<script lang="ts" setup>
const tooltipValue = ref(
  "文字内容很多烦烦烦方法读完《远去的群落》，给<span style='color:red;'>我</span>印象最深的是他对鲁迅发自心底的深厚感情，让<span style='color:red;'>我</span>“心有戚戚焉”。孙郁现在是专业的鲁迅研究者。中间曾经一度到新闻单位工作，由于他研究鲁迅的丰硕成果，也由于他对鲁"
);
</script>
