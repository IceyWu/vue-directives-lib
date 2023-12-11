import { useClipboard, useEventListener } from "@vueuse/core";
import type { Directive, DirectiveBinding } from "vue";

interface CopyEl extends HTMLElement {
  copyValue: string;
  callback?: any;
}
let isObj = false;
/** 文本复制指令（默认点击） */
export const copy: Directive = {
  mounted(el: CopyEl, binding: DirectiveBinding) {
    const { value } = binding;
    isObj = Object.prototype.toString.call(value) === "[object Object]";
    const copyValue = isObj ? value.copyValue : value;
    el.copyValue = copyValue;
    const cb = binding.value?.callback;
    if (copyValue) {
      const arg = binding.arg ?? "click";
      useEventListener(el, arg, () => {
        const { text, copy, copied, isSupported } = useClipboard();
        if (!isSupported) {
          cb && cb({ isSupported });
        }
        copy(el.copyValue).then(() => {
          // console.log('复制成功',text.value);
          cb &&
            cb({
              isSupported: isSupported.value,
              copied: copied.value,
              copyValue: text.value
            });
        });
        copied.value && console.log(`🎉[Directive: copy]: ${el.copyValue}`);
      });
    } else {
      throw new Error(
        '🎉[Directive: copy]: need value! Like v-copy="modelValue"'
      );
    }
  },
  updated(el: CopyEl, binding: DirectiveBinding) {
    const { value } = binding;
    const copyValue = isObj ? value.copyValue : value;
    el.copyValue = copyValue;
  }
};
