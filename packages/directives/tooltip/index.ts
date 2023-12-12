import type { Directive, DirectiveBinding } from "vue";
import { computePosition, offset, shift, flip, arrow } from "@floating-ui/dom";
import { useDark } from "@vueuse/core";
import type { ToolTipEl } from "../../types";

/** 文本溢出指令 */
export const tooltip: Directive = {
  mounted(el: ToolTipEl, binding: DirectiveBinding) {
    const offsetVal = binding.value?.offset || 5;
    const textSpan = document.createElement("span");
    // arrow
    const arrowEl = document.createElement("div");
    arrowEl.setAttribute("id", "vue-directives-tooltip-arrow");
    // 设置arrow样式
    arrowEl.style.cssText = `
        position: absolute;
       height: 10px;
         width: 10px;
         background:red;
        `;

    document.body.appendChild(textSpan);
    textSpan.innerHTML = el.innerText;
    if (textSpan.offsetWidth > el.offsetWidth) {
      el.style.overflow = "hidden";
      el.style.textOverflow = "ellipsis";
      el.style.whiteSpace = "nowrap";
      el.onmouseenter = e => {
        const tempTooltipDom = document.createElement("div");
        tempTooltipDom.style.cssText = `
          display: inline-block;
          max-width: 400px;
          max-height: 400px;
          position: absolute;
          padding: 12px;
          font-size: 14px;
          color: ${useDark().value ? "#CFD3DC" : "#606266"};
          background: ${useDark().value ? "#1d1e1f" : "#ffffff"};
          box-shadow: ${
            useDark().value
              ? "0px 0px 12px rgba(0, 0, 0, .12)"
              : "0px 0px 12px rgba(0, 0, 0, .12)"
          };
          border-radius: 5px;
          word-break: break-all;
          box-sizing: border-box;
          z-index: 19999;
          line-height: 1.4;
        `;

        tempTooltipDom.setAttribute("id", "vue-directives-tooltip");
        document.body.appendChild(tempTooltipDom);

        document.getElementById("vue-directives-tooltip").innerHTML =
          el.innerText;
        // tempTooltipDom.appendChild(arrowEl);

        const tooltipPosition = computePosition(el, tempTooltipDom, {
          placement: "bottom",
          middleware: [
            offset(offsetVal),
            shift(),
            flip(),
            arrow({
              element: arrowEl,
              padding: 10
            })
          ]
        }).then(({ x, y, middlewareData }) => {
          tempTooltipDom.style.top = y + "px";
          tempTooltipDom.style.left = x + "px";
          //   console.log("🍭-----middlewareData-----", middlewareData);
          // if (middlewareData.arrow) {
          //   console.log(
          //     "🌈-----middlewareData.arrow-----",
          //     middlewareData.arrow
          //   );
          //   const { x: arrowX, y: arrowY } = middlewareData.arrow;
          //   // Object.assign(arrowEl.style, {
          //   //   left: arrowX != null ? `${arrowX}px` : "",
          //   //   top: arrowY != null ? `${arrowY}px` : ""
          //   // });
          // }
        });
      };

      el.onmouseleave = () => {
        const tempTooltipDom = document.getElementById(
          "vue-directives-tooltip"
        );
        tempTooltipDom && document.body.removeChild(tempTooltipDom);
        const tempTooltipArrowDom = document.getElementById(
          "vue-directives-tooltip-arrow"
        );
        tempTooltipArrowDom && document.body.removeChild(tempTooltipArrowDom);
      };
    }
    document.body.removeChild(textSpan);
  }
};
