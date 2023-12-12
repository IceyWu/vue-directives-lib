import type { Directive, DirectiveBinding } from "vue";
// import { createApp } from "vue";
// import Loading from "./loading";

const relativeCls = "hay-loading-parent--relative";
export function addClass(el, className) {
  // 如果当前元素样式列表中没有className
  if (!el.classList.contains(className)) {
    el.classList.add(className);
  }
}

export function removeClass(el, className) {
  el.classList.remove(className);
}

function append(el: HTMLElement & { instance: any }) {
  const style = getComputedStyle(el);
  if (["absolute", "fixed", "relative"].indexOf(style.position) === -1) {
    addClass(el, relativeCls);
  }
  el.appendChild(el.instance.$el);
}
function remove(el: HTMLElement & { instance: any }) {
  removeClass(el, relativeCls);
  el.removeChild(el.instance.$el);
}

/** loading指令 */
export const loading: Directive = {
  // mounted(el: HTMLElement, binding: DirectiveBinding) {
  //   const app = createApp(Loading);
  //   const instance = app.mount(document.createElement("div"));
  //   el.instance = instance;
  //   const title = binding.arg;
  //   if (typeof title !== "undefined") {
  //     (instance as any).setTitle(title);
  //   }
  //   if (
  //     typeof binding.value === "object" &&
  //     binding.value !== null &&
  //     binding.value.text
  //   ) {
  //     (instance as any).setTitle(binding.value.text);
  //   }
  //   if (binding.value) {
  //     if (typeof binding.value === "boolean") append(el);
  //     if (typeof binding.value === "object" && binding.value !== null) {
  //       if (binding.value.value) append(el);
  //     }
  //   }
  // },
  // updated(el: HTMLElement & { instance: any }, binding: DirectiveBinding) {
  //   const title = binding.arg;
  //   if (typeof title !== "undefined") {
  //     el.instance.setTitle(title);
  //   }
  //   if (binding.value !== binding.oldValue) {
  //     // bool的情况
  //     if (typeof binding.value === "boolean") {
  //       binding.value ? append(el) : remove(el);
  //     }
  //     // object的情况
  //     if (typeof binding.value === "object" && binding.value !== null) {
  //       binding.value.value ? append(el) : remove(el);
  //     }
  //   }
  // }
};
