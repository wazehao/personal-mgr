import { defineComponent } from 'vue';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons-vue';
// 导入默认组件
// defineComponent包裹后会有默认提示
// 在components里引入图标并注册
export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
    MailOutlined,
  },

  setup() { // 代码初始化的时候执行一次

  },
});
