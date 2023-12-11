import { useClipboard, useEventListener } from "@vueuse/core";
import type { Directive, DirectiveBinding } from "vue";

interface CopyEl extends HTMLElement {
  copyValue: string;
}

/** 文本复制指令（默认点击） */
export const copy: Directive = {
  mounted(el: CopyEl, binding: DirectiveBinding) {
    const { value } = binding;
    if (value) {
      el.copyValue = value;
      const arg = binding.arg ?? "click";
      useEventListener(el, arg, () => {
        console.log("🎉[Directive: copy]: ", el.copyValue);
        const { copy, copied, isSupported } = useClipboard();
        if (!isSupported) {
          console.warn("🎉[Directive: copy]: Clipboard is not supported!");
        }
        copy(el.copyValue);
        copied.value && console.log(`🎉[Directive: copy]: ${el.copyValue}`);
      });
    } else {
      throw new Error(
        '🎉[Directive: copy]: need value! Like v-copy="modelValue"'
      );
    }
  },
  updated(el: CopyEl, binding: DirectiveBinding) {
    el.copyValue = binding.value;
  }
};
