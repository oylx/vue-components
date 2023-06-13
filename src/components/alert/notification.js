import Alert from './notification.vue'
import Vue from 'vue'
// 补充知识
// vm.$mount( [elementOrSelector] )
// 如果 Vue 实例在实例化时没有收到 el 选项，则它处于“未挂载”状态，没有关联的 DOM 元素。可以使用 vm.$mount() 手动地挂载一个未挂载的实例。
// 如果没有提供 elementOrSelector 参数，模板将被渲染为文档之外的的元素，并且你必须使用原生 DOM API 把它插入文档中。
// 这个方法返回实例自身，因而可以链式调用其它实例方法。

// var MyComponent = Vue.extend({
//   template: '<div>Hello!</div>'
// })
// 法1.创建并挂载到 #app (会替换 #app)
// new MyComponent().$mount('#app')
// 法2.
// new MyComponent({ el: '#app' })
// 3.或者，在文档之外渲染并且随后挂载
// var component = new MyComponent().$mount()
// document.getElementById('app').appendChild(component.$el)


// vm.$children
// 类型：Array<Vue instance>
// 只读
// 详细：
// 当前实例的直接子组件。需要注意 $children 并不保证顺序，也不是响应式的。如果你发现自己正在尝试使用 $children 来进行数据绑定，考虑使用一个数组配合 v-for 来生成子组件，并且使用 Array 作为真正的来源。

// vm.$el
// 类型：Element
// 只读
// 详细：
// Vue 实例使用的根 DOM 元素。

// 此处alert引入的方式，不用写template,方便写代码
Alert.newInstance = (properties) => {
  let props = properties || {}
  const Instance = new Vue({
    data: props,
    render: (h) => h(Alert, { props })
  })
  // Instance和component属性基本一致
  const component = Instance.$mount()
  // 打印能看到$el是<div></div>的DOM元素,Instance和component是几乎一样的组件
  document.body.appendChild(component.$el)
  // 当前实例的直接子组件 $children 并不保证顺序，也不是响应式的
  // $children[0]:div.alert
  // alert与component/Instance相比，多包含add/remove/notices/constructor属性
  const alert = Instance.$children[0]
  // let arr3 = [], arr1 = [], arr2 = []
  // for (let key1 in component) {
  //   arr1.push(key1)
  // }
  // for (let key2 in Instance) {
  //   arr2.push(key2)
  // }
  // for (let key3 in alert) {
  //   arr3.push(key3)
  // }
  // arr3.forEach(v => {
  //   if(!arr2.includes(v)) {
  //     console.log(v)
  //   }
  // })
  return {
    add(noticeProps) {
      alert.add(noticeProps)
    },
    remove(name) {
      alert.remove(name)
    }
  }
}
export default Alert
