
import Vue from 'vue';
import VueQuillEditor from 'vue-quill-editor';
import Quill from 'quill';
const fontSizeStyle = Quill.import('attributors/style/size');
fontSizeStyle.whitelist = ['12px', '14px', '16px', '18px', '20px', '24px', '36px']; // 自定义quill的工具栏
Quill.register(fontSizeStyle, true);
Vue.use(VueQuillEditor);