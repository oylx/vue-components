import Notification from './notification.js'

let instance

const getMessageInstance = () => {
  instance = instance || Notification.newInstance()
  return instance
}

const notice = ({ duration = 1.5, content = '' }) => {
  let instance = getMessageInstance()
  instance.add({ content, duration })
}

export default {
  info(options) {
    return notice(options)
  }
}
