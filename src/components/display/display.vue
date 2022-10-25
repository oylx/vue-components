<template>
  <div ref="display"></div>
</template>

<script>
import randomStr from '@/utils/random_str'
import Vue from 'vue/dist/vue.esm'
export default {
  name: 'IDisplay',
  data() {
    return {
      html: null,
      js: null,
      style:null,
      component: null,
      id: randomStr()
    }
  },
  props: {
    code: {
      type: String,
      default: '',
    }
  },
  watch: {
    code () {
      this.destroyCode()
      this.renderCode()
    }
  },
  mounted() {
    this.renderCode()
  },
  beforeDestroy() {
    this.destroyCode()
  },
  methods: {
    getSource(source, type) {
      const regex = new RegExp(`<${type}[^>]*>`)
      console.log(regex)
      let openingTag = source.match(regex)
      if (!openingTag) return ''
      else openingTag = openingTag[0]
      return source.slice(source.indexOf(openingTag) + openingTag.length, source.lastIndexOf(`</${type}>`))
    },
    splitCode() {
      const script = this.getSource(this.code, 'script').replace(/export default/, 'return ')
      const style = this.getSource(this.code, 'style')
      const template = `<div id="app"> ${this.getSource(this.code, 'template') } </div>`
      this.js = script
      this.html = template
      this.style = style
    },
    destroyCode() {
      // 移除css样式
      const $cssTarget = document.getElementById(this.id);
      if ($cssTarget) $cssTarget.parentNode.removeChild($cssTarget);
      if (this.component) {
        // 移除节点
        this.$refs.display.removeChild(this.component.$el)
        // 销毁实例
        this.component.$destroy()
        this.component = null
      }
    },
    renderCode() {
      this.splitCode()
      if (this.html && this.js) {
        const parseStrToFunc = new Function(this.js)()
        parseStrToFunc.template = this.html
        const Component = Vue.extend(parseStrToFunc)
        this.component = new Component().$mount()
        this.$refs.display.appendChild(this.component.$el)
        if (this.css) {
          const style = document.createElement('style')
          style.type = 'text/css'
          style.id = this.id
          style.innerHTML = this.css
          document.getElementsByTagName('head')[0].appendChild(style)
        }
      }

    }
  }
}
</script>
