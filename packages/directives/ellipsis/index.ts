import type { Directive, DirectiveBinding } from "vue";

interface EllipsisEl extends HTMLElement {
  rows?: number;
  numbers?: number;
  expandText?: string;
  collapseText?: string;
  content?: string;
}

/** 富文本指定字数展开收起 */
export const ellipsis: Directive = {
  mounted(el: EllipsisEl, binding: DirectiveBinding) {
    const {
      rows = 3,
      numbers = -1,
      expandText = "展开",
      collapseText = "收起",
      content = ""
    } = binding.value || {};
    const contentText = content || el.innerText;
    const contentLength = contentText.length;

    // const sliceContent = contentText.slice(0, numbers) + dots;
    const sliceContent = contentText.slice(0, numbers);

    const expandEl = document.createElement("span");
    expandEl.setAttribute("id", "vue-directives-ellipsis-expand");
    expandEl.style.cssText = `
      color: #409eff;
      cursor: pointer;
      display: inline-block;
    `;
    expandEl.innerHTML = expandText;
    const collapseEl = document.createElement("span");
    collapseEl.setAttribute("id", "vue-directives-ellipsis-collapse");
    collapseEl.style.cssText = `
      color: #409eff;
      cursor: pointer;
      display: none;
    `;
    collapseEl.innerHTML = collapseText;

    const textSpan = document.createElement("span");

    const overStyle = `
    line-height: 1.6;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    word-break: break-all;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${rows};
    overflow: hidden;
  `;

    const baseStyle = `
  line-height: 1.6;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-break: break-all;
  `;
    textSpan.style.cssText = baseStyle;
    textSpan.setAttribute("id", "vue-directives-ellipsis-text");
    textSpan.innerHTML = sliceContent;
    el.innerHTML = "";
    el.appendChild(textSpan);
    el.appendChild(expandEl);
    el.appendChild(collapseEl);

    // 通过行数判断是否需要展开收起
    if (rows > 0) {
      const lineHeight = +textSpan.style.lineHeight;
      console.log("🦄-----lineHeight-----", lineHeight);
      const maxHeight = lineHeight * rows;
      console.log("🍭-----maxHeight-----", maxHeight);
      console.log("🍭-----el.offsetHeight-----", el.offsetHeight);
      if (el.offsetHeight > maxHeight) {
        console.log("🐳------------------------------>");
        textSpan.innerHTML = sliceContent;
        expandEl.style.display = "inline-block";
        collapseEl.style.display = "none";

        // textSpan添加样式
        textSpan.style.cssText = overStyle;
      }
    }

    if (contentLength > numbers) {
      expandEl.style.display = "inline-block";
      collapseEl.style.display = "none";
    }
    expandEl.onclick = e => {
      console.log("🐠展开------------------------------>");
      textSpan.innerHTML = contentText;
      expandEl.style.display = "none";
      collapseEl.style.display = "inline-block";
      textSpan.style.cssText = baseStyle;
    };
    collapseEl.onclick = e => {
      console.log("🐳收起------------------------------>");

      textSpan.innerHTML = sliceContent;
      expandEl.style.display = "inline-block";
      collapseEl.style.display = "none";
      textSpan.style.cssText = overStyle;
    };
  }
};
