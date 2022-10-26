import Alert from './alert.vue'
import Vue from 'vue'


Alert.newInstance = (properties) => {
  let props = properties || {}
  const Instance = new Vue({
    data: props,
    render(h) {
      return h(Alert, { props})
    }
  })
  const component = Instance.$mount()
  // $el Vue 实例使用的根 DOM 元素
  document.body.appendChild(component.$el)
  // 当前实例的直接子组件 $children 并不保证顺序，也不是响应式的
  // $children[0]:div.alert
  const alert = Instance.$children[0]
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
