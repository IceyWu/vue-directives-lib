<template>
    <div v-copy="copyValue">{{copyValue}}</div>
    
  </template>
  
  <script lang="ts" setup>
  import { copy as vCopy} from "../../../packages/directives";
  const copyValue = ref("我是复制的内容");
  </script>
  