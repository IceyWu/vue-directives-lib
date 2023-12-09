<h1 align="center">vue-directives-lib</h1>
<p align="center">🚀实用的vue自定义指令</p>

<p align="center">
<a href="https://www.npmjs.com/package/vue-directives-lib" target="__blank"><img src="https://img.shields.io/npm/v/vue-directives-lib?color=a1b858&label=" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/vue-directives-lib" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/vue-directives-lib?color=50a36f&label="></a>
</p>

**中文** | [English](./README.md)

<!-- - [预览地址](https://pkg-demo.netlify.app/) -->

## 📦 安装

```bash
npm install vue-directives-lib
or
pnpm add vue-directives-lib
or
yarn add vue-directives-lib
```

## 🦄 用法

- 全局引入

```ts
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import vueDirectives from "vue-directives-lib";

const app = createApp(App);
app.use(vueDirectives);
app.mount("#app");
```

- 局部引入

```ts
// test.vue
<template>
  <div v-copy="copyValue">{{copyValue}}</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { copy as vCopy } from "vue-directives-lib";
const copyValue = ref("我是复制的内容");
</script>
```
