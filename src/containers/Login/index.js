import './index.css';
import { useState } from 'react';
import { Button, Form, Input, Dialog} from 'antd-mobile';

const initialValues = {
  username: 'hhhh',
  password: '112345',
};
const Login = () =>{
  const [form] = Form.useForm()
  const onSubmit = () => {
    const values = form.getFieldsValue()
    Dialog.alert({
      content: <pre>{JSON.stringify(values, null, 2)}</pre>,
    })
  }

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
