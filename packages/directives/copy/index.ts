import { useClipboard, useEventListener } from "@vueuse/core";
import type { Directive, DirectiveBinding } from "vue";
import type { CopyEl, CopyCallBack } from "../../types";

/** 文本复制指令（默认点击） */
export const copy: Directive = {
  mounted(el: CopyEl, binding: DirectiveBinding) {
    const { value } = binding;
    const isObj = Object.prototype.toString.call(value) === "[object Object]";
    const copyValue = isObj ? value.copyValue : value;
    el.copyValue = copyValue;
    const cb = binding.value?.callback as (arg: CopyCallBack) => void;
    if (copyValue) {
      const arg = binding.arg ?? "click";
      useEventListener(el, arg, () => {
        const { text, copy, copied, isSupported } = useClipboard();
        if (!isSupported) {
          cb &&
            cb({
              isSupported: isSupported.value,
              copied: copied.value,
              copyValue: text.value
            });
        }
        copy(el.copyValue).then(() => {
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
    const isObj = Object.prototype.toString.call(value) === "[object Object]";

    const copyValue = isObj ? value.copyValue : value;
    el.copyValue = copyValue;
  }
};
