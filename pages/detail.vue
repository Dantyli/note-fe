<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-sider width="400" >
    <a-list size="large" bordered :data-source="data">
      <a-list-item slot="renderItem" slot-scope="item, index">
        {{ item }}
      </a-list-item>
      <!-- <div slot="header">
        Header
      </div>
      <div slot="footer">
        Footer
      </div> -->
    </a-list>
      </a-layout-sider>
      <a-layout>
        <a-layout-header>小程序与普通网页开发的区别</a-layout-header>
        <a-layout-content style="min-height:500px;color:#000">
          <!-- <div v-html="content"></div> -->
          <div v-highlight class="markdown-body" v-html="content"></div>
        </a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>
<script lang="ts">
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];
import Vue from 'vue'
import marked from 'marked'
export default Vue.extend({
  data() {
    return {
      data,
      content:'',
      title: ''
    };
  },
  mounted() {
    this.content = marked(localStorage.getItem('content') || '')
    this.title = marked(localStorage.getItem('title') || '')
  }
})
</script>
<style lang="scss"  scoped>
  #components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #fff;
  /* color: #fff; */
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  background: #fff;
  /* color: #fff; */
  line-height: 120px;
  border-right: 1px solid #e8e8e8;
}
#components-layout-demo-basic .ant-layout-content {
  background: #fff;
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
#components-layout-demo-basic .ant-layout-sider-children{
  border-right: 1px solid #e8e8e8;
}
.ant-list-bordered{
  border: none;
}
.ant-list-bordered .ant-list-item{
  border:none;
}
</style>