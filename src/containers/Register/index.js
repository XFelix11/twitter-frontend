import { useState } from 'react';
import { Button, Input, Form } from 'antd-mobile';
import Header from '@components/Header';
import DatePickerInput from '@components/DatePickerInput';

import style from './index.module.scss';

const ACCOUNT_TYPE = {
  TEL: 'TEL',
  EMAIL: 'EMAIL',
};

// register page

const Register = () => {
  const [form] = Form.useForm();
  const [formData] = useState({
    name: '',
    tel: '',
    email: '',
    birthday: '',
  });

  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.TEL);

  const onAccountChange = () => {
    if (accountType === ACCOUNT_TYPE.TEL) {
      setAccountType(ACCOUNT_TYPE.EMAIL);
      return;
    }
    setAccountType(ACCOUNT_TYPE.TEL);
  };

  const onClickNextStep = async () => {
    const validate = await form.validateFields();
    if (validate) {
      console.log(validate);
    }
  };

  return (
    <div>
      <Header />
      <div className={style.form}>
        <div className={style.formTitle}>Create Your Account</div>
        <Form form={form} initialValues={formData} className={style.formContainer}>
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input your name.' }]}
          >
            <Input placeholder="Username" className={style.input} />
          </Form.Item>
          <Form.Item>
            {accountType === ACCOUNT_TYPE.TEL && (
            <Form.Item
              name="tel"
              rules={[{ required: true, message: 'Please input your phone number.' }]}
            >
              <Input placeholder="Phone Number" className={style.input} />
            </Form.Item>
            )}
            {accountType === ACCOUNT_TYPE.EMAIL && (
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your email.' }]}
            >
              <Input placeholder="Email" className={style.input} />
            </Form.Item>
            )}
          </Form.Item>
          <div className={style.typeButton} onClick={onAccountChange}>
            {accountType === ACCOUNT_TYPE.EMAIL ? 'Use Phone Number' : 'Use Email'}
          </div>
          <div className={style.birthday}>Date of Birth</div>
          <div>This will not be shown publicly. Confirm your own age.</div>
          <Form.Item name="birthday">
            <DatePickerInput />
          </Form.Item>
        </Form>
      </div>
      <div className={style.footer}>
        <Button className={style.footerButton} onClick={onClickNextStep}>Next</Button>
      </div>
    </div>
  );
};

export default Register;
