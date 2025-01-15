/*
 * @Author: yufeila 17786321727@163.com
 * @Date: 2025-01-14 20:29:02
 * @LastEditors: yufeila 17786321727@163.com
 * @LastEditTime: 2025-01-14 20:29:38
 * @FilePath: \repo\Personal_Web\docs\javascripts\katex.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
document$.subscribe(({ body }) => { 
    renderMathInElement(body, {
      delimiters: [
        { left: "$$",  right: "$$",  display: true },
        { left: "$",   right: "$",   display: false },
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true }
      ],
    })
  })