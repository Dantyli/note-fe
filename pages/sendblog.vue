<template>
  <!-- <client-only>
    <div>
      <quill-editor
          ref="editor"
          v-model="content"
          :options="editorOption"
          @change="onEditorChange($event)"
        />
    </div>
  </client-only> -->
  <div class="blog_container">
    <a-input class="blog_title" placeholder="请输入文章标题" v-model="title"/>
    <client-only>
      <mavon-editor style="height:500px" :toolbars="markdownOption" v-model="handbook"/>
    </client-only>
    <div class="blog_category">
      <h3>文章分类</h3>
      <template v-for="tag in tags">
      <a-checkable-tag
        :key="tag"
        :checked="selectedTags && selectedTags.indexOf(tag) > -1"
        @change="checked => handleChange(tag, checked)"
      >
        {{ tag }}
      </a-checkable-tag>
    </template>
    </div>
    <div class="send_blog">
      <a-button @click="saveBlog">保存</a-button>
      <a-button @click="previewBlog">预览</a-button>
      <a-button @click="sendBlog" type="primary">发布</a-button>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import toolbarOptions  from '../utils/markdownOptions'
export default Vue.extend({
  data(){
    return {
      markdownOption: toolbarOptions,
      handbook:"#### 这是手册",
      title:'',
      tags: ['vue', 'javascript', 'react', 'typescript'],
      selectedTags: [''],
    }
  },
  mounted() {
    console.log('toolbarOptions',toolbarOptions)
  //   if (process.client) {
  //   const { VueEditor } = require('vue-html5-editor')
  //   this.$options.components = { VueEditor }
  //   this.isClient = true
  // }
    this.handbook = localStorage.getItem('content') || ''
    this.title = localStorage.getItem('title') || ''
    let selectedTags: string | null = localStorage.getItem('tag')
    console.log('selectedTags',selectedTags)
    this.selectedTags = selectedTags ? selectedTags.split(',') : []
  },
  methods:{
    handleChange(tag:any, checked:any) {
      const { selectedTags } = this;
      const nextSelectedTags = checked
        ? [...selectedTags, tag]
        : selectedTags.filter(t => t !== tag);
      console.log('You are interested in: ', nextSelectedTags);
      this.selectedTags = nextSelectedTags;
    },
     saveBlog() {
       let selectedTags = this.selectedTags.join(',')
       localStorage.setItem('content',this.handbook)
       localStorage.setItem('title', this.title)
       localStorage.setItem('tag', selectedTags)
      //  this.$router.push({path:'/articlelist'})
     },
     previewBlog() {
       const blogContent = {
         'content': this.handbook,
         'title': this.title,
         'tag': this.selectedTags
       }
       let selectedTags = this.selectedTags.join(',')
       localStorage.setItem('blogContent', `${blogContent.toString()}`)
       localStorage.setItem('content',this.handbook)
       localStorage.setItem('title', this.title)
       localStorage.setItem('tag', selectedTags)
       this.$router.push({path:'/blogpreview'})
     },
     sendBlog() {
       
       this.$router.push({path:'/detail'})
     },
  }
})
</script>
<style lang="scss" scoped>
  .send_blog{
    margin-top: 40px;
    text-align: right;
  }
  .blog_title{
    margin-bottom: 20px;
    height: 40px;
  }
  .blog_category{
    margin-top: 40px;
  }
</style>