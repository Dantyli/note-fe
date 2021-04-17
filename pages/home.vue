<template>
  <div class="home">
    <div class="home_content">
      <img class="home_img" src="~/assets/images/hero.png" />
      <h1 class="my_blog">我的博客</h1>
      <p class="home_description">记录每天遇到的一些问题</p>
      <a-button type="primary" @click="gotolist">
        Get Started <a-icon type="arrow-right" />
      </a-button>
    </div>
    <a-divider />
    <div class="home_bottom">
      <a-list :grid="{ gutter: 16, column: 2 }" :data-source="bottomData" >
      <a-list-item slot="renderItem" slot-scope="item, index">
        <a-card :title="item.title" :bordered="false">
          {{item.content}}
        </a-card>
      </a-list-item>
    </a-list>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
const data = [
  {
    title: '我的blog',
    content: '记录每天遇到的一些问题以及一些新东西，每天进步一点点！'
  },
  {
    title: '关于我',
    content: '一直从事web前端开发，虽然技术一直很菜，但相信坚持下去，每天进步一点点，积累经验，总会变得强大起来的！'
  }
];
export default Vue.extend({
  asyncData(context) {
    return {
      name: 'world',
      bottomData: data
      }
  },
  fetch () {
    // The fetch method is used to fill the store before rendering the page
  },
  head () {
    // Set Meta Tags for this Page
    return {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
    }
  },
  methods:{
    gotolist(){
      this.$router.push({path:'/articlelist'})
    }
  }
})
</script>
<style>
  .home_content{
    text-align: center;
  }
  .home_img{
    max-width: 100%;
    max-height: 280px;
    display: block;
    margin: 3rem auto 1.5rem;
  }
  .my_blog {
    text-align: center;
    font-size: 3rem;
    margin: 1.8rem auto;
  }
  .home_description{
    font-size: 1.6rem;
    line-height: 1.3;
    color: #6a8bad;
    text-align: center;
  }
  .home_bottom{
    width: 60%;
    margin: 0 auto;
    text-align: center;
  }
</style>