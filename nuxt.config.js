export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.core.css',
    'ant-design-vue/dist/antd.css',
    {src: "~assets/style/common.scss",lang:'scss'},
    {src: "~assets/style/highlight.css"},
    {src: "mavon-editor/dist/css/index.css"}
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    // '@/plugins/vue-html5-editor'
    { src: '~/plugins/vue-html5-editor.js', ssr: false },
    { src: "~plugins/vue-quill-editor.js", ssr: false },
    { src: "~plugins/vue-markdown.js", ssr: false },
    { src: "@/directive/index.js", ssr:false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  runtimeCompiler: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isDev, isClient }) {
      // runtimeCompiler: true
      config.resolve.alias['vue$'] = "vue/dist/vue.esm.js"
    }
  },
  // render: {
  //   bundleRenderer: {
  //     directives: {
  //       highlight: function (vnode, dir) {
  //         let blocks = vnode.querySelectorAll('pre code')
  //         blocks.forEach((block) => {
  //         hljs.highlightBlock(block)
  //        })
  //       }
  //     }
  //   }
  // }
}
