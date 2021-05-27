import { defineComponent, reactive } from 'vue';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons-vue';
import { register, login } from '@/service/auth';
import { message } from 'ant-design-vue';
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
    // 注册表单
    const regForm = reactive({
      account: '',
      password: '',
    });

    // 登录表单
    const loginForm = reactive({
      account: '',
      password: '',
    });

    // 注册逻辑
    const registers = async () => {
      if (regForm.account === '') {
        message.info('请输入注册账号');
        return;
      }
      if (regForm.password === '') {
        message.info('请输入注册密码');
        return;
      }
      const res = await register(regForm.account, regForm.password);
      // auth.register(regForm.account, regForm.password);
    };

    // 登录逻辑
    const logins = async () => {
      if (loginForm.account === '') {
        message.info('登录账号不能为空');
        return;
      }
      if (loginForm.password === '') {
        message.info('登录密码不能为空');
        return;
      }
      const res = await login(loginForm.account, loginForm.password);
    };

    return {
      regForm, // 注册数据
      loginForm, // 登录数据
      registers, // 注册方法
      logins, // 登录方法
    };
  },
});
