import type { Directive, DirectiveBinding } from "vue";
import { useEventListener } from "@vueuse/core";

interface LongpressEl extends HTMLElement {
  pressTime?: number;
  callback: () => void;
}

/** 长按指令 */
export const longpress: Directive = {
  mounted(el: LongpressEl, binding: DirectiveBinding) {
    const pressTime = binding.value?.pressTime || 500;
    const cb = binding.value?.callback;
    if (cb && typeof cb === "function") {
      let timer = null;
      let interTimer = null;

      let interNum = null;
      const isInter = binding?.arg?.includes(":") ?? false;

      const clear = () => {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        if (interTimer) {
          clearInterval(interTimer);
          interTimer = null;
        }
      };

      const onDownInter = (ev: PointerEvent) => {
        ev.preventDefault();
        if (interTimer === null) {
          interTimer = setInterval(() => cb(), interNum);
        }
      };

      const onDown = (ev: PointerEvent) => {
        clear();
        ev.preventDefault();
        if (timer === null) {
          timer = isInter
            ? setTimeout(() => {
                cb();
                onDownInter(ev);
              }, pressTime)
            : setTimeout(() => cb(), pressTime);
        }
      };

      // Register using addEventListener on mounted, and removeEventListener automatically on unmounted
      useEventListener(el, "pointerdown", onDown);
      useEventListener(el, "pointerup", clear);
      useEventListener(el, "pointerleave", clear);
    } else {
      throw new Error(
        '[Directive: longpress]: need callback and callback must be a function! Like v-longpress="{ callback: onEndFunc }"'
      );
    }
  }
};
