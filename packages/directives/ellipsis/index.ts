import type { Directive, DirectiveBinding } from "vue";

interface EllipsisEl extends HTMLElement {
  rows?: number;
  numbers?: number;
  expandText?: string;
  collapseText?: string;
  content?: string;
  dot?: string;
}
function generateUUID(num = 8) {
  const chars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  const uuid = [];
  let i;
  num = num || 32;
  for (i = 0; i < num; i++) uuid[i] = chars[0 | (Math.random() * 62)];
  return uuid.join("");
}

/** 富文本指定字数展开收起 */
export const ellipsis: Directive = {
  mounted(el: EllipsisEl, binding: DirectiveBinding) {
    const {
      rows = 3,
      numbers = -1,
      expandText = "展开",
      collapseText = "收起",
      content = "",
      dot = "..."
    } = binding.value || {};
    const contentText = content || el.innerText;
    const contentLength = contentText.length;
    const uuId = generateUUID();

    // 使用正则过滤掉span标签
    // const reg = /<span.*?>|<\/span>/g;
    // const contentT = contentText.replace(reg, "");

    // const sliceContent = contentText.slice(0, numbers) + dots;
    const sliceContent = contentText.slice(0, numbers);

    el.style.textAlign = `left`;

    const expandEl = document.createElement("span");
    expandEl.setAttribute("id", `vue-directives-ellipsis-expand-${uuId}`);
    expandEl.style.cssText = `
      color: #409eff;
      cursor: pointer;
      display: inline-block;
      white-space: nowrap;
    `;
    expandEl.innerHTML = expandText;
    const collapseEl = document.createElement("span");
    collapseEl.setAttribute("id", `vue-directives-ellipsis-collapse${uuId}`);
    collapseEl.style.cssText = `
      color: #409eff;
      cursor: pointer;
      display: none;
      white-space: nowrap;
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
    textSpan.setAttribute("id", `vue-directives-ellipsis-text-${uuId}`);
    textSpan.innerHTML = sliceContent;
    el.innerHTML = "";
    el.appendChild(textSpan);
    el.appendChild(expandEl);
    el.appendChild(collapseEl);

    // 通过行数判断是否需要展开收起
    if (rows > 0) {
      const lineHeight = +textSpan.style.lineHeight;

      const maxHeight = lineHeight * rows;

      if (el.offsetHeight > maxHeight) {
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
      textSpan.innerHTML = contentText;
      expandEl.style.display = "none";
      collapseEl.style.display = "inline-block";
      textSpan.style.cssText = baseStyle;
    };
    collapseEl.onclick = e => {
      textSpan.innerHTML = sliceContent;
      expandEl.style.display = "inline-block";
      collapseEl.style.display = "none";
      textSpan.style.cssText = overStyle;
    };
  }
};
