import './index.css';
import { Button, Form, Input, Dialog} from 'antd-mobile';
import { loginService } from  '../../services/login'

const initialValues = {
  username: 'hhhh',
  password: '112345',
};
const Login = () =>{
  const [form] = Form.useForm()

  const onSubmit = async() => {
    const values = form.getFieldsValue();
    const res = await loginService(values.username, values.password);
    if (res && res.length > 0) {
      Dialog.alert({
        content: JSON.stringify(res),
      });
      return;
    }
    Dialog.alert({
      content: 'username or password is incorrect',
    });

  };

  return (
    <div className="login">
      <Form 
        form={form}
        layout='horizontal' mode='card' initialValues={initialValues}
        footer={
          <Button block color='primary' onClick={onSubmit} size='large'>
            Login
          </Button>
        }
      >
        <Form.Item label='Username' name='username'>
          <Input placeholder='Please input username' clearable />
        </Form.Item>
        <Form.Item label='Password' name='password'>
          <Input placeholder='Please input password' clearable type='password' />
        </Form.Item>
      </Form> 
    </div>
  );
}

export default Login;
