import { useEffect } from 'react';
import {
  Button,
  Form,
  Dialog,
} from 'antd-mobile';
import { Link } from 'react-router-dom';
import { useAppContext } from '@utils/context';
import TInput from '@components/TInput';
import Cookies from 'js-cookie';
import { login } from '../../services/login';
import { useGoTo } from '@utils/hooks';
import style from './index.module.scss';

// Login page
const Login = () => {
  const [form] = Form.useForm();
  const go = useGoTo();

  const [, setStore] = useAppContext();
  useEffect(() => {
    setStore({
      closeHeaderHandler: null,
    });
  }, []);

  const onSubmit = async () => {
    const values = await form.validateFields();
    if (values) {
      const res = await login(values.username, values.password);
      if (res.success && res.data.length > 0) {
        Dialog.alert({
          content: 'Sign in successfully!',
        });
        Cookies.set('userId', res.data[0].id);
        go('tweets');
        return;
      }
      Dialog.alert({
        content: 'Username or password is incorrect :(',
      });
    }
  };

  return (
    <div className={style.login}>
      <div className={style.formTitle}>Sign in to SchoolConnect</div>
      <Form
        form={form}
        className={style.formContainer}
      >
        <Form.Item
          name="username"
          rules={[
            { required: true, message: 'Please input your username!' },
          ]}
        >
          <TInput label="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: 'Please input your password!' },
          ]}
        >
          <TInput label="Password" type="password" />
        </Form.Item>
        <Button className={style.footerButton} onClick={onSubmit}>
          Next
        </Button>
      </Form>
      <div className={style.goToRegister}>
        No account?
        <Link to="/register">Register</Link>
      </div>

    </div>
  );
};

export default Login;
