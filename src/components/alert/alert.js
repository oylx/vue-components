import Notification from './notification.js'

let instance
// 单例模式
const getInstance = () => {
  instance = instance || Notification.newInstance()
  return instance
}

const notice = ({ duration = 1.5, content = '' }) => {
  let instance = getInstance()
  instance.add({ content, duration })
}

export default {
  info(options) {
    return notice(options)
  }
}
