import type { Directive, DirectiveBinding } from "vue";
import type { TypeEl, TypeCallBack } from "../../types";
import { isObject, isString } from "@iceywu/utils";

/** 打字机 */
export const typed: Directive = {
  mounted(el: TypeEl, binding: DirectiveBinding) {
    const { value } = binding;
    const textValue = isObject(value) ? value.value : value;
    const { typeSpeed = 100, loop = false, unique } = binding.value || {};
    const cb = binding.value?.onComplete as (arg: TypeCallBack) => void;
    let index = 0;
    const type = () => {
      if (!isString(textValue)) return;
      if (index < textValue.length) {
        el.innerHTML += textValue.charAt(index);
        index++;
        setTimeout(type, typeSpeed);
      } else {
        if (loop) {
          index = 0;
          el.innerHTML = "";
          setTimeout(type, 1000);
        }
        cb && cb({ el, index, textValue, unique });
      }
    };
    type();
  }
};
