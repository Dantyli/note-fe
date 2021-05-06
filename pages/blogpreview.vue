<template>
  <div class="blog_container" >
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240);min-height:500px"
      title="返回"
      @back="goback"
    >
    <h2 class="blog_title">{{title}}</h2>
    <div v-highlight class="markdown-body" v-html="previewContent"></div>
    </a-page-header>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import marked from 'marked'
// import '@/assets/style/highlight.css' //引入代码高亮的css
export default Vue.extend({
  data() {
    return {
      previewContent: '',
      title: ''
    }
  },
  mounted() {
    this.previewContent = marked(localStorage.getItem('content') || '')
    this.title = localStorage.getItem('title') || ''
  },
  methods:{
    goback(){
      this.$router.push({path:'/sendblog'})
    }
  }
})
</script>
<style lang="scss" scoped>
  .blog_title{
    text-align: center;
  }
</style>