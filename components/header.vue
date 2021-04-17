<template>
  <div class="head">
    <a-row type="flex" justify="space-between">
      <a-col flex="500px" style="text-align:left"><h1 class="blog_logo">我的博客</h1></a-col>
      <a-col flex="auto" style="text-align:right">
        <a-input-search placeholder="input search text" style="width: 200px" @search="onSearch" />
        <a-menu mode="horizontal" style="display:inline-block;text-align:right;margin-left:20px">
          <a-menu-item>Vue</a-menu-item>
          <a-menu-item>Javascript</a-menu-item>
          <a-menu-item>React</a-menu-item>
          <a-menu-item>Typescript</a-menu-item>
        </a-menu>
      </a-col> 
    </a-row>
    <a-divider />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  asyncData(context) {
    return {current: ''}
  },
  methods:{
    onSearch(value:any) {
      console.log(value);
    }
  }
})
</script>
<style lang="scss" scoped>
.head{
  padding: 20px;
}
  .blog_logo{
    text-align: left;
    font-size: 1.3rem;
  }
</style>