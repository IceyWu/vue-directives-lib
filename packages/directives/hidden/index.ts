import type { Directive, DirectiveBinding } from "vue";

/** v-hiden */
export const hidden: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    if (binding.value) {
      el.style.display = "none";
    } else {
      el.style.display = "block";
    }
  },
  // 值更新
  updated(el: HTMLElement, binding: DirectiveBinding) {
    if (binding.value) {
      el.style.display = "none";
    } else {
      el.style.display = "block";
    }
  }
};
