import { Button, Input } from 'antd-mobile';
import style from './index.module.css';
import Header from '../../components/Header';
import DatePickerInput from '../../components/DatePickerInput';

// register page

const Register = () => {
  console.log('>>>>');
  return (
    <div>
      <Header />
      <div className={style.form}>
        <div className={style.formTitle}>Create Your Account</div>
        <Input placeholder="Username" className={style.input} />
        <Input placeholder="Phone Number" className={style.input} />
        <div className={style.typeButton}>Use Email</div>
        <div className={style.birthday}>Date of Birth</div>
        <div>This will not be shown publicly. Confirm your own age.</div>
        <DatePickerInput />
      </div>
      <div className={style.footer}>
        <Button className={style.footerButton}>Next</Button>
      </div>
    </div>
  );
};

export default Register;
