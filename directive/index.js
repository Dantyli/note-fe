import Vue from 'vue'
import hljs from 'highlight.js'
//  const highlight = Vue.directive('highlight', {
//   bind:function (vnode, dir) {
//     let blocks = vnode.querySelectorAll('pre code')
//     blocks.forEach((block) => {
//       console.log('blocks',block)
//       block.style.color='#f00'
//     hljs.highlightBlock(block)
//    })
//   }
// })
const highlight = Vue.directive('highlight', function(el,binding) {
  console.log('el',el ,binding)
  // el.style.color="green"
  let arr = el.querySelectorAll('pre code')
  arr.forEach((block) => {
    // block.style.color="green"
    hljs.highlightBlock(block)
  })
  console.log('arr',arr)
})
export default highlight