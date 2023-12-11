import type { Directive, DirectiveBinding } from "vue";

/** 文本溢出指令 */
export const tooltip: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const curStyle = window.getComputedStyle(el, "");
    const textSpan = document.createElement("span");
    textSpan.style.fontSize = curStyle.fontSize;
    textSpan.style.fontWeight = curStyle.fontWeight;
    textSpan.style.fontFamily = curStyle.fontFamily;
    document.body.appendChild(textSpan);
    textSpan.innerHTML = el.innerText;
    if (textSpan.offsetWidth > el.offsetWidth) {
      el.style.overflow = "hidden";
      el.style.textOverflow = "ellipsis";
      el.style.whiteSpace = "nowrap";
      el.onmouseenter = e => {
        console.log(e);
        const kxmTooltipDom = document.createElement("div");
        kxmTooltipDom.style.cssText = `
          display: inline-block;
          max-width: 400px;
          max-height: 400px;
          position: absolute;
          top: ${e.clientY + 5}px;
          left: ${e.clientX}px;
          padding: 10px;
          overflow: auto;
          font-size: 14px;
          color: #fff;
          background: rgba(0, 0 , 0, .6);
          border-radius: 5px;
          z-index: 19999
          `;

        kxmTooltipDom.setAttribute("id", "vue-directives-tooltip");
        document.body.appendChild(kxmTooltipDom);
        document.getElementById("vue-directives-tooltip").innerHTML =
          el.innerText;
      };

      el.onmouseleave = () => {
        console.log(...arguments);
        const kxmTooltipDom = document.getElementById("vue-directives-tooltip");
        kxmTooltipDom && document.body.removeChild(kxmTooltipDom);
      };
    }
    // 需要注意：更新完之后需要移除容器，不然body里会多一个span元素内容
    document.body.removeChild(textSpan);
  }
  // updated(el: HTMLElement, binding: DirectiveBinding) {
  //   el.copyValue = binding.value;
  // }
};
