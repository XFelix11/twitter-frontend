import { useState } from 'react';
import { Form } from 'antd-mobile';
import Header from '@components/Header';
import DatePickerInput from '@components/DatePickerInput';
import TInput from '@components/TInput';
import Footer from './components/Footer';

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
  const [footerButtonDisabled, setFooterButtonDisabled] = useState(true);

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

  const onValuesChange = async () => {
    try {
      const validate = await form.validateFields();
      if (validate) {
        setFooterButtonDisabled(false);
      }
    } catch (e) {
      if (e.errorFields.length === 0) {
        setFooterButtonDisabled(false);
        return;
      }
      setFooterButtonDisabled(true);
    }
  };

  return (
    <div>
      <Header />
      <div className={style.form}>
        <div className={style.formTitle}>Create Your Account</div>
        <Form
          form={form}
          initialValues={formData}
          onValuesChange={onValuesChange}
          className={style.formContainer}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input your name.' }]}
          >
            <TInput length={50} label="Username" />
          </Form.Item>
          <Form.Item>
            {accountType === ACCOUNT_TYPE.TEL && (
            <Form.Item
              name="tel"
              rules={[{ required: true, message: 'Please input a valid phone number.', pattern: /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g }]}
            >
              <TInput length={10} label="Phone Number" />
            </Form.Item>
            )}
            {accountType === ACCOUNT_TYPE.EMAIL && (
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input a valid email.', pattern: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g }]}
            >
              <TInput length={254} label="email" />
            </Form.Item>
            )}
          </Form.Item>
          <span className={style.typeButton} onClick={onAccountChange}>
            {accountType === ACCOUNT_TYPE.EMAIL ? 'Use Phone Number' : 'Use Email'}
          </span>
          <div className={style.birthday}>Date of Birth</div>
          <div>This will not be shown publicly. Confirm your own age.</div>
          <Form.Item name="birthday">
            <DatePickerInput />
          </Form.Item>
        </Form>
      </div>
      <Footer disabled={footerButtonDisabled} onClickNextStep={onClickNextStep} />
    </div>
  );
};

export default Register;
