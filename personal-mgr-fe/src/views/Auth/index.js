import { defineComponent, reactive } from 'vue';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons-vue';
import { register } from '@/service/auth';
// import { auth } from '@/service';

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
    const regForm = reactive({
      account: '',
      password: '',
    });

    const registers = () => {
      console.log(regForm);
      console.log(register);
      register(regForm.account, regForm.password);
      // auth.register(regForm.account, regForm.password);
    };

    return {
      regForm,
      registers,
    };
  },
});
