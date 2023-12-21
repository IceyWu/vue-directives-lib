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

const getSliceHtml = (sliceText, baseText) => {
  let sliceLength = sliceText.length;
  let sliceHtml = "";
  const reg = /<[^>]+>/g;
  function getSliceHtml(sliceLength) {
    sliceHtml = baseText.slice(0, sliceLength);
    const tempText = sliceHtml.replace(reg, "");
    if (tempText === sliceText) {
      return sliceHtml;
    } else {
      // sliceLength += 30;
      sliceLength++;
      return getSliceHtml(sliceLength);
    }
  }
  return getSliceHtml(sliceLength);
};

/** 富文本指定字数展开收起 */
export const ellipsis: Directive = {
  mounted(el: EllipsisEl, binding: DirectiveBinding) {
    const {
      rows = 3,
      numbers = 30,
      expandText = "展开",
      collapseText = "收起",
      content = "",
      dot = "..."
    } = binding.value || {};
    console.log("🦄-----numbers-----", numbers);
    const contentText = content || el.innerText;
    // 截取字符串`文字内容很多烦烦烦方法读完《远去的群落》，给<span style='color:red;'>我</span>印象最深的是他对鲁迅发`,将span标签去掉,保留纯文本
    const pureText = contentText.replace(/<[^>]+>/g, "");
    const contentLength = pureText.length;

    const uuId = generateUUID();

    el.style.textAlign = `left`;
    el.style.lineHeight = "1.5";

    const expandEl = document.createElement("span");
    expandEl.setAttribute("id", `vue-directives-ellipsis-expand-${uuId}`);
    expandEl.style.cssText = `
      color: #409eff;
      cursor: pointer;
      display: none;
      white-space: nowrap;
    `;
    // 添加类名
    expandEl.className = "vue-directives-ellipsis-expand";
    expandEl.innerHTML = expandText;
    const collapseEl = document.createElement("span");
    collapseEl.setAttribute("id", `vue-directives-ellipsis-collapse${uuId}`);
    collapseEl.style.cssText = `
      color: #409eff;
      cursor: pointer;
      display: none;
      white-space: nowrap;
    `;
    // 添加类名
    collapseEl.className = "vue-directives-ellipsis-collapse";
    collapseEl.innerHTML = collapseText;
    const textSpan = document.createElement("span");

    const baseStyle = `
      line-height: 1.6;
      white-space: pre-wrap;
      overflow-wrap: break-word;
      word-break: break-all;
      `;
    textSpan.style.cssText = baseStyle;
    textSpan.setAttribute("id", `vue-directives-ellipsis-text-${uuId}`);
    textSpan.innerHTML = contentText;
    el.innerHTML = "";
    el.appendChild(textSpan);
    el.appendChild(expandEl);
    el.appendChild(collapseEl);

    // 通过行数判断是否需要展开收起
    // const lineHeight = parseFloat(getComputedStyle(el).lineHeight || "");

    let sliceContent = "";

    // if (el.offsetHeight > lineHeight * rows) {

    //   expandEl.style.display = "inline-block";
    //   collapseEl.style.display = "none";
    //   // 计算需要截取的字数
    //   const totalNum = pureText.length;

    // }

    if (contentLength > numbers) {
      const tempSliceContent = pureText.slice(0, numbers);
      // sliceContent = contentText.slice(0, tempSliceContent.length); + dot;
      sliceContent = getSliceHtml(tempSliceContent, contentText) + dot;
      textSpan.innerHTML = sliceContent;
      expandEl.style.display = "inline-block";
      collapseEl.style.display = "none";
    }

    expandEl.onclick = e => {
      textSpan.innerHTML = contentText;
      expandEl.style.display = "none";
      collapseEl.style.display = "inline-block";
    };
    collapseEl.onclick = e => {
      textSpan.innerHTML = sliceContent;
      expandEl.style.display = "inline-block";
      collapseEl.style.display = "none";
    };
  }
};
