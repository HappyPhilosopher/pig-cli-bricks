// 引入的不再是Vue构造函数，而是一个名为createApp的工厂函数
import { createApp } from 'vue';
import App from './App.vue';

// createApp(App) —— 创建应用实例对象-app（类似于Vue2中的vm）
const app = createApp(App);

// 挂载
app.mount('#app');
