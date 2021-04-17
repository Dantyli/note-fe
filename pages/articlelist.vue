<template>
  <div class="blog_list">
    <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
    <div slot="footer"><b>ant design vue</b> footer part</div>
    <a-list-item slot="renderItem" key="item.title" slot-scope="item, index">
      <template v-for="{ type, text } in actions" slot="actions">
        <span :key="type">
          <a-icon :type="type" style="margin-right: 8px" />
          {{ text }}
        </span>
      </template>
      <a-list-item-meta :description="item.description">
        <a slot="title" :href="item.href">{{ item.title }}</a>
        <a-avatar slot="avatar" :src="item.avatar" />
      </a-list-item-meta>
      {{ item.content }}
    </a-list-item>
  </a-list>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
const listData:any = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://www.antdv.com/',
    title: `ant design vue part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}
export default Vue.extend({
  asyncData(context) {
    return {
      listData: listData,
      pagination: {
        onChange: (page:any) => {
          console.log(page);
        },
        pageSize: 3,
      },
      actions: [
        { type: 'star-o', text: '156' },
        { type: 'like-o', text: '156' },
        { type: 'message', text: '2' },
      ],
    };
    }
})
</script>
<style lang="scss" scoped>
  .blog_list{
    width: 90%;
    margin: 0 auto;
  }
  .ant-list-vertical .ant-list-item{
    width: 40%;
    margin-right: 10%;
    &:nth-child(2n){
      margin-right: 0;
    }
  }
</style>